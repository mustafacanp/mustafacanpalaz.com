import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { BleepsProvider, useBleeps } from '@arwes/react';

export type BleepName = 'click' | 'type' | 'intro';

const STORAGE_KEY = 'mcp-sound';

const bleepsSettings = {
  master: { volume: 0.6 },
  common: { preload: false },
  categories: {
    interaction: { volume: 0.5 },
    transition: { volume: 0.35 }
  },
  bleeps: {
    click: { category: 'interaction' as const, sources: [{ src: '/sounds/click.wav', type: 'audio/wav' }] },
    type: { category: 'transition' as const, sources: [{ src: '/sounds/type.wav', type: 'audio/wav' }] },
    intro: { category: 'transition' as const, sources: [{ src: '/sounds/intro.wav', type: 'audio/wav' }] }
  }
};

type SoundState = {
  enabled: boolean;
  toggle: () => void;
};

const SoundContext = createContext<SoundState>({ enabled: false, toggle: () => {} });

const readStored = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'on';
  } catch {
    return false;
  }
};

const SoundStateProvider = ({ children }: { children: ReactNode }) => {
  // Sound is off by default; browsers also block audio before a user gesture.
  const [enabled, setEnabled] = useState(readStored);
  const bleeps = useBleeps<BleepName>();

  const toggle = useCallback(() => {
    const next = !enabled;
    setEnabled(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    if (next) {
      bleeps.click?.load();
      bleeps.type?.load();
      bleeps.intro?.play();
    }
  }, [enabled, bleeps]);

  return <SoundContext.Provider value={{ enabled, toggle }}>{children}</SoundContext.Provider>;
};

export const SoundProvider = ({ children }: { children: ReactNode }) => (
  <BleepsProvider {...bleepsSettings}>
    <SoundStateProvider>{children}</SoundStateProvider>
  </BleepsProvider>
);

export const useSound = () => useContext(SoundContext);

export const usePlay = () => {
  const { enabled } = useSound();
  const bleeps = useBleeps<BleepName>();
  return useCallback((name: BleepName) => enabled && bleeps[name]?.play(), [enabled, bleeps]);
};
