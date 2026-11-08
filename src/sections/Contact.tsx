import { Animated, Animator } from "@arwes/react";
import { profile } from "../content";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Panel } from "../components/Panel";
import { Reveal } from "../components/Reveal";

export const Contact = () => (
  <Reveal className="section">
    <Heading id="contact" index="06">
      Contact.exe
    </Heading>
    <Panel frame="kranox" className="contact">
      <p className="contact__text">Open a channel. The fastest way to reach me is email.</p>
      <span className="contact__email">{profile.email}</span>
      <div className="hero__actions">
        <Button href={`mailto:${profile.email}`} variant="primary">
          Send email
        </Button>
        <Button href={profile.resume} external>
          Resume
        </Button>
        <Button href={profile.linkedin} external>
          LinkedIn
        </Button>
        <Button href={profile.github} external>
          GitHub
        </Button>
      </div>
    </Panel>
    <Animator>
      <Animated as="footer" className="footer" animated={["fade"]}>
        <span>
          {"©"} {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          <a href={profile.retro} target="_blank" rel="noopener noreferrer">
            Retro version (React95)
          </a>
        </span>
      </Animated>
    </Animator>
  </Reveal>
);
