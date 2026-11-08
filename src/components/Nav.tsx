import { useEffect, useState } from 'react';
import { Animated, Animator, FrameLines, Text } from '@arwes/react';
import { profile } from '../content';
import { usePlay } from './Sound';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const play = usePlay();

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  const onLink = () => {
    play('click');
    setOpen(false);
  };

  return (
    <Animator root active combine manager="stagger" duration={{ stagger: 0.04 }}>
      <header className="nav">
        <Animator>
          <FrameLines className="nav__frame" largeLineWidth={1} smallLineWidth={2} smallLineLength={16} />
        </Animator>
        <div className="nav__inner">
          <Animator>
            <a className="nav__brand" href="#top" onClick={onLink}>
              <Text as="span" manager="decipher" fixed>
                {'MCP://'}
              </Text>
            </a>
          </Animator>

          <button
            className="nav__menu"
            type="button"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => {
              play('click');
              setOpen(!open);
            }}
          >
            {open ? 'Close' : 'Menu'}
          </button>

          <nav id="nav-links" className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
            {links.map((link) => (
              <Animator key={link.href}>
                <Animated as="a" href={link.href} onClick={onLink} animated={['fade', ['y', -6, 0]]}>
                  {link.label}
                </Animated>
              </Animator>
            ))}
            <Animator>
              <Animated
                as="a"
                href={profile.cmd}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLink}
                className="nav__cmd"
                animated={['fade', ['y', -6, 0]]}
              >
                {'>_ Command Line'}
              </Animated>
            </Animator>
            <Animator>
              <Animated
                as="a"
                href={profile.retro}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onLink}
                className="nav__cmd"
                animated={['fade', ['y', -6, 0]]}
              >
                {'[ Win95 ]'}
              </Animated>
            </Animator>
          </nav>
        </div>
      </header>
    </Animator>
  );
};
