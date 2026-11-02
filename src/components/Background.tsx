import { Animator, Dots, GridLines, MovingLines } from '@arwes/react';

export const Background = () => (
  <Animator root active duration={{ enter: 1.2, interval: 10 }}>
    <div className="background" aria-hidden="true">
      <GridLines lineColor="hsla(180, 100%, 75%, 0.035)" distance={40} />
      <Dots color="hsla(180, 100%, 75%, 0.06)" distance={40} size={1.5} origin="top" />
      <MovingLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={40} sets={16} />
    </div>
  </Animator>
);
