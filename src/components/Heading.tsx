import { Animator, BleepsOnAnimator, FrameUnderline, Text } from '@arwes/react';
import { useSound, type BleepName } from './Sound';

type HeadingProps = {
  id: string;
  icon: string;
  children: string;
};

export const Heading = ({ id, icon, children }: HeadingProps) => {
  const { enabled } = useSound();
  return (
    <Animator duration={{ enter: 0.6 }}>
      {enabled && <BleepsOnAnimator<BleepName> transitions={{ entering: 'type' }} />}
      <h2 className="heading" id={id}>
        <span className="heading__icon" aria-hidden="true">
          {icon}
        </span>
        <Text as="span" manager="decipher" fixed>
          {children}
        </Text>
        <FrameUnderline className="heading__line" squareSize={10} strokeWidth={1.5} />
      </h2>
    </Animator>
  );
};
