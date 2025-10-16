import Tilt from 'react-parallax-tilt';
import { ReactNode } from 'react';

export const TiltCard = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <Tilt
    glareEnable
    glareMaxOpacity={0.18}
    glareColor="#38bdf8"
    glarePosition="all"
    tiltMaxAngleX={16}
    tiltMaxAngleY={16}
    transitionSpeed={1200}
    className={`will-change-transform ${className}`}
    style={{ borderRadius: 24 }}
  >
    {children}
  </Tilt>
);
