import { Animator, FrameUnderline, Text } from '@arwes/react';

type HeadingProps = {
  id: string;
  index: string;
  children: string;
};

export const Heading = ({ id, index, children }: HeadingProps) => (
  <Animator duration={{ enter: 0.6 }}>
    <h2 className="heading" id={id}>
      <span className="heading__index" aria-hidden="true">
        {index}
      </span>
      <Text as="span" manager="decipher" fixed>
        {children}
      </Text>
      <FrameUnderline className="heading__line" squareSize={10} strokeWidth={1.5} />
    </h2>
  </Animator>
);
