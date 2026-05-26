import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEETCODE_USER = "nishantnsut27";
const STATS_JSON_PATH = path.join(__dirname, 'stats.json');

async function fetchLeetCode() {
  const query = `
  query getUserProfile($username: String!) {
      allQuestionsCount { difficulty count }
      matchedUser(username: $username) {
          submitStats { acSubmissionNum { difficulty count } }
          profile { ranking }
          badges { id name icon }
          userCalendar { submissionCalendar }
      }
      userContestRanking(username: $username) { rating topPercentage }
      userContestRankingHistory(username: $username) { rating contest { startTime } }
  }
  `;
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username: LEETCODE_USER } })
    });
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function main() {
  const lc_data = await fetchLeetCode();
  if (!lc_data) {
    process.exit(1);
  }
  let existingData = { leetcode: null, kaggle: null };
  try {
    existingData = JSON.parse(fs.readFileSync(STATS_JSON_PATH, 'utf8'));
  } catch (e) {
    console.error(e);
  }
  existingData.leetcode = lc_data;
  existingData.lastUpdated = new Date().toISOString();
  fs.writeFileSync(STATS_JSON_PATH, JSON.stringify(existingData, null, 2));
  console.log("LeetCode data successfully refreshed in stats.json");
}

main();
