import type { ReactNode } from 'react';
import { Animated, Animator, FrameKranox, FrameOctagon } from '@arwes/react';

type PanelProps = {
  as?: 'div' | 'article' | 'li';
  frame?: 'octagon' | 'kranox';
  className?: string;
  children: ReactNode;
};

// Framed box that draws its border, then fades its content in.
export const Panel = ({ as = 'div', frame = 'octagon', className = '', children }: PanelProps) => {
  const Tag = as;
  return (
    <Animator duration={{ enter: 0.5 }}>
      <Tag className={`panel panel--${frame} ${className}`}>
        {frame === 'kranox' ? (
          <FrameKranox padding={4} strokeWidth={2} squareSize={12} smallLineLength={12} largeLineLength={48} />
        ) : (
          <FrameOctagon squareSize={14} strokeWidth={1.5} leftTop={false} rightBottom={false} />
        )}
        <Animated className="panel__content" animated={['fade', ['y', 12, 0]]}>
          {children}
        </Animated>
      </Tag>
    </Animator>
  );
};
