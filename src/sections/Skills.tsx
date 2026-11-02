import { skills } from '../content';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';
import { Reveal } from '../components/Reveal';

export const Skills = () => (
  <Reveal className="section">
    <Heading id="skills" index="02">
      Skills.exe
    </Heading>
    <ul className="grid grid--skills list-plain">
      {skills.map((group) => (
        <Panel as="li" key={group.name}>
          <h3 className="label">
            {group.name}
          </h3>
          <ul className="chips list-plain">
            {group.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </Panel>
      ))}
    </ul>
  </Reveal>
);
