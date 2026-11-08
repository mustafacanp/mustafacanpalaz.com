import { useCallback, type ReactNode } from 'react';
import { BleepsProvider, useBleeps } from '@arwes/react';

export type BleepName = 'click';

// Sound is always on. It only plays on clicks, which also satisfies the browsers' user-gesture rule.
const bleepsSettings = {
  master: { volume: 0.6 },
  common: { preload: true },
  categories: {
    interaction: { volume: 0.5 }
  },
  bleeps: {
    click: { category: 'interaction' as const, sources: [{ src: '/sounds/click.wav', type: 'audio/wav' }] }
  }
};

export const SoundProvider = ({ children }: { children: ReactNode }) => (
  <BleepsProvider {...bleepsSettings}>{children}</BleepsProvider>
);

export const usePlay = () => {
  const bleeps = useBleeps<BleepName>();
  return useCallback((name: BleepName) => bleeps[name]?.play(), [bleeps]);
};
