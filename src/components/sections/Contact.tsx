import { FormEvent, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import emailjs from '@emailjs/browser';


type FormField = 'name' | 'email' | 'message';

type FormState = Record<FormField, string>;

export const Contact = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const cardRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (field: FormField) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    try {
      setIsLoading(true);
      setStatus({ type: null, message: '' });

      await emailjs.sendForm(
        'Portfolio',
        'template_Portfolio',
        formRef.current,
        'S04H9sHcZloS1nxlX'
      );

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      setFormState({ name: '', email: '', message: '' });
      
      // Clear success message after 4 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 4000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again or contact me directly.'
      });
      
      // Clear error message after 4 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };
  const disabled = !formState.name.trim() || !formState.email.trim() || !formState.message.trim();

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateX = ((rect.height / 2 - offsetY) / rect.height) * 12;
    const rotateY = ((offsetX - rect.width / 2) / rect.width) * 14;
    setTilt({ x: rotateX, y: rotateY });
  };
  return (
    <section id="contact" className="relative z-10 py-28">
      <div className="mx-auto w-full max-w-5xl px-4">
        <SectionHeading
          title="Contact"
          description="Let's connect and create something memorable."
          align="center"
        />
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl [perspective:1600px]">
            <div
              ref={cardRef}
              className="relative min-h-[640px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(12,12,14,0.85)] shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              style={{ transformStyle: 'preserve-3d', transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
              onPointerMove={handlePointerMove}
              onPointerLeave={resetTilt}
            >
              <div className="flex h-full flex-col rounded-[32px] p-10 sm:p-12" style={{ backfaceVisibility: 'hidden' }}>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Get in touch</p>
                    <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Drop me a line</h3>
                  </div>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
                  {status.type && (
                    <div className={`p-4 rounded-lg ${
                      status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {status.message}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-gray-500">Name</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formState.name}
                      onChange={handleChange('name')}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-gray-500">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleChange('email')}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs uppercase tracking-[0.35em] text-gray-500">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange('message')}
                      className="mt-3 h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                      placeholder="Tell me about the opportunity or idea."
                      required
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={disabled || isLoading}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#2ea4e4] disabled:pointer-events-none disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-500 sm:text-right">Prefer email? Reach out directly at nishant30488@gmail.com.</p>
                  </div>
                </form>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5" style={{ mixBlendMode: 'plus-lighter' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
