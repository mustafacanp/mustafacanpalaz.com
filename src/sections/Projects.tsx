import { Animated, Animator } from '@arwes/react';
import { projectLinks, projects } from '../content';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';
import { Reveal } from '../components/Reveal';
import { usePlay } from '../components/Sound';

const isExternal = (url: string) => url.startsWith('http');
const linkProps = (url: string) => (isExternal(url) ? { target: '_blank', rel: 'noopener noreferrer' } : {});

export const Projects = () => {
  const play = usePlay();
  return (
    <>
      <Reveal className="section">
        <Heading id="projects" index="04">
          Projects.exe
        </Heading>
        <ul className="grid grid--projects list-plain">
          {projects.map((project) => (
            <Panel as="li" key={project.name} className="project">
              <p className="project__category">{project.category}</p>
              <h3 className="project__name">{project.name}</h3>
              <p className="project__tagline">{project.tagline}</p>
              <p className="project__description">{project.description}</p>
              <ul className="chips list-plain">
                {project.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="project__links">
                {project.live && (
                  <a href={project.live} {...linkProps(project.live)} onClick={() => play('click')}>
                    Check it out
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} {...linkProps(project.repo)} onClick={() => play('click')}>
                    GitHub
                  </a>
                )}
                {project.note && <span className="project__note">{project.note}</span>}
              </div>
            </Panel>
          ))}
        </ul>
      </Reveal>

      <Reveal className="section">
        <Heading id="links" index="05">
          ProjectLinks.exe
        </Heading>
        <Animator combine manager="stagger" duration={{ stagger: 0.04 }}>
          <ul className="links list-plain">
            {projectLinks.map((link) => {
              const text = (
                <span className="link-row__text">
                  <span className="link-row__name">{link.name}</span>
                  {link.description?.map((line) => (
                    <span key={line} className="link-row__description">
                      {line}
                    </span>
                  ))}
                </span>
              );
              return (
                <Animator key={link.name}>
                  <Animated as="li" animated={['fade', ['x', -10, 0]]}>
                    {link.url ? (
                      <a className="link-row" href={link.url} {...linkProps(link.url)} onClick={() => play('click')}>
                        {text}
                        <span className="link-row__arrow" aria-hidden="true">
                          {'->'}
                        </span>
                      </a>
                    ) : (
                      <div className="link-row">{text}</div>
                    )}
                  </Animated>
                </Animator>
              );
            })}
          </ul>
        </Animator>
      </Reveal>
    </>
  );
};
