import { Animated, Animator } from '@arwes/react';
import { otherJobs, wolframBase, wolframBullets } from '../content';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';
import { Reveal } from '../components/Reveal';

const Chips = ({ items }: { items: string[] }) => (
  <ul className="chips list-plain">
    {items.map((item) => (
      <li key={item} className="chip">
        {item}
      </li>
    ))}
  </ul>
);

const JobHeader = ({ company, role, date, url }: { company: string; role: string; date: string; url?: string }) => (
  <header className="job__header">
    <div>
      <h3 className="job__company">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          company
        )}
      </h3>
      <p className="job__role">{role}</p>
    </div>
    <p className="job__date">{date}</p>
  </header>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="bullets">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export const Experience = () => (
  <Reveal className="section">
    <Heading id="experience" index="03">
      Experience.exe
    </Heading>
    <div className="jobs">
      <Panel frame="kranox" className="job job--featured">
        <JobHeader {...wolframBase} />
        <Bullets items={wolframBullets} />
        <Chips items={wolframBase.tech} />
      </Panel>
      <Animator>
        <Animated as="p" className="jobs__earlier label" animated={['fade']}>
          Earlier
        </Animated>
      </Animator>
      <div className="grid grid--jobs">
        {otherJobs.map((job) => (
          <Panel as="article" key={job.company} className="job">
            <JobHeader {...job} />
            <Bullets items={job.bullets} />
            <Chips items={job.tech} />
          </Panel>
        ))}
      </div>
    </div>
  </Reveal>
);
