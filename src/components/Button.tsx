import type { ReactNode } from 'react';
import { Animated, Animator, FrameOctagon, Illuminator } from '@arwes/react';
import { usePlay } from './Sound';

type ButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  children: ReactNode;
};

export const Button = ({ href, variant = 'secondary', external, children }: ButtonProps) => {
  const play = usePlay();
  return (
    <Animator>
      <Animated
        as="a"
        className={`button button--${variant}`}
        href={href}
        animated={['fade', ['x', -8, 0]]}
        onClick={() => play('click')}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <FrameOctagon squareSize={8} leftTop={false} rightBottom={false} />
        <Illuminator className="button__glow" size={120} color="hsla(178, 90%, 60%, 0.12)" />
        <span className="button__label">{children}</span>
      </Animated>
    </Animator>
  );
};
