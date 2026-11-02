import { about } from '../content';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';
import { Reveal } from '../components/Reveal';

export const About = () => (
  <Reveal className="section">
    <Heading id="about" index="01">
      Hello.exe
    </Heading>
    <div className="about">
      <Panel frame="kranox" className="about__intro">
        <p className="about__greeting">{about.greeting}</p>
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </Panel>
      <Panel className="about__education">
        <h3 className="label">Education & Certifications</h3>
        <ul className="list-plain">
          {about.education.map((item) => (
            <li key={item.label} className="edu">
              <span>
                <span className="edu__type">{item.type}</span>
                <span className="edu__label">{item.label}</span>
                <span className="edu__date">{item.date}</span>
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  </Reveal>
);
