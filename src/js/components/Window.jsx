import * as React from 'react'
import {
    Button,
    Checkbox,
    Window,
    WindowContent,
    WindowHeader,
    Fieldset,
    reset,
    themes,
} from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { scroller } from 'react-scroll'
import styles from '../../css/Window.css'

const ResetStyles = createGlobalStyle`
  ${reset}
`

export const scrollNext = (elementName, offsetNum) => {
    scroller.scrollTo(elementName, {
        duration: 3000,
        smooth: 'easeInOutQuint',
        offset: offsetNum ? offsetNum : null,
    })
}

export const openLink = (url, name = '_blank') => {
    window.open(
        url,
        name
    );
}

const Intro = () => (
    <div stylename='styles.windowDivLayer}'>
        <ResetStyles />
        <ThemeProvider theme={themes.water}>
            <Window styleName='styles.windowSpacing'>
                <WindowHeader styleName='styles.windowHeader'>😎 Hello.exe</WindowHeader>
                <WindowContent>
                    <Fieldset>
                        {/* Hi, I'm <span styleName='styles.nameInline'>Mustafa Can Palaz.</span> */}
                        I am a passionate developer who want to be a part of the creation of the future.
                        I've never limit myself by the things that I have to do. I always try to learn new technologies.
                        <br />
                        <br />
                        I often look at the problems in my life like an algorithm. That makes it easy to solve problems and makes my life easier.
                        <br />
                        <br />
                        Hence, I can literally define myself as Full Stack Software Developer.
                    </Fieldset>
                    <br />
                    <Fieldset label="Education">
                        <div styleName='styles.radioProcess'>
                            <Checkbox
                                checked={true}
                                onChange={() => null}
                                value="OGU"
                                label="TR Eskişehir Osmangazi University"
                                name="school"
                            />
                            <div styleName='styles.textProcess'>
                                <div styleName='styles.eduTextLong'>Bachelor of Science in Math & Computer Science</div>
                                <div styleName='styles.eduTextLong'>Sep, 2011 -- Jun, 2016</div>
                            </div>
                            <br />
                        </div>
                    </Fieldset>
                </WindowContent>
                <div styleName='styles.buttonGroup'>
                    <Button onClick={() => scrollNext('skills', -150)}><span>Next ⇓</span></Button>
                </div>
            </Window>
        </ThemeProvider>
    </div>
)

export default Intro
