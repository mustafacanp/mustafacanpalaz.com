import { Animated, Animator, Text } from '@arwes/react';
import { profile, wolframBase } from '../content';
import { Button } from '../components/Button';

export const Hero = () => (
  <Animator root active combine manager="sequence" duration={{ delay: 0.2 }}>
    <section className="hero" id="top">
      <Animator duration={{ enter: 0.6 }}>
        <Text as="p" className="hero__prompt" manager="sequence" fixed>
          {'> whoami'}
        </Text>
      </Animator>
      <Animator duration={{ enter: 0.9 }}>
        <Text as="h1" className="hero__name" manager="decipher" fixed>
          {profile.name}
        </Text>
      </Animator>
      <Animator duration={{ enter: 0.6 }}>
        <Animated as="p" className="hero__title" animated={['fade', ['y', 10, 0]]}>
          {profile.title} <span className="hero__at">@ {wolframBase.company}</span>
        </Animated>
      </Animator>
      <Animator duration={{ enter: 0.6 }}>
        <Animated as="p" className="hero__lead" animated={['fade', ['y', 10, 0]]}>
          I build web platforms end to end: React and TypeScript front ends, Java and Node back ends, and the tooling
          that keeps big code bases fast.
        </Animated>
      </Animator>
      <Animator combine manager="stagger" duration={{ stagger: 0.08 }}>
        <div className="hero__actions">
          <Button href={`mailto:${profile.email}`} variant="primary">
            Contact me
          </Button>
          <Button href={profile.github} external>
            GitHub
          </Button>
          <Button href={profile.cmd} external>
            {'>_ Command Line'}
          </Button>
        </div>
      </Animator>
    </section>
  </Animator>
);
