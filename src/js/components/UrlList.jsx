import * as React from 'react'
import {
    Button,
    Window,
    WindowContent,
    WindowHeader,
    Select,
    themes,
    Fieldset,
} from 'react95'
import { ThemeProvider } from 'styled-components'
import { scrollNext, openLink } from './Window.jsx'
import styles from '../../css/Window.css'

const items = [
    {
        value: 'https://mustafacanpalaz.com/cmd',
        label: '💻 React Terminal',
    },
    {
        value: 'https://textgamerpg.com',
        label: '🎮👾 Text Game',
    },
    {
        value: 'https://mustafacanpalaz.com/randomColor',
        label: '🎨 Random Color',
    },
    {
        value: 'https://mustafacanpalaz.com/isItWetAPI/',
        label: '💧 Is It Wet?',
    },
    {
        value: 'https://www.spoileral.com',
        label: '🎬 Spoiler Al',
    },
    {
        value: 'https://mustafacanpalaz.com/theDollarRises',
        label: '💵 The Dollar Rises',
    }
]

const UrlList = () => (
    <div>
        <ThemeProvider theme={themes.water}>
            <Window styleName='styles.windowSpacing'>
                <WindowHeader styleName='styles.windowHeader'>🔗 ProjectLinks.exe</WindowHeader>

                <WindowContent>
                    <Fieldset>
                        <div styleName='styles.radioProcess'>
                            Select a name to get redirected to the project page.
                        </div>
                    </Fieldset>
                    <br />
                    <Fieldset label="Direct link to all projects live.">
                        <div styleName='styles.radioProcess'>
                            <Select items={items} onChange={(value) => openLink(value)}
                                styleName='styles.projectUrl' />
                            <br />
                        </div>
                    </Fieldset>
                </WindowContent>
                <div styleName='buttonGroup'>
                    <Button onClick={() => scrollNext('project', -150)}><span>Back ⇑</span></Button>
                    <Button onClick={() => scrollNext('intro', -150)}><span>Top ⇑⇑</span></Button>
                </div>
            </Window>
        </ThemeProvider>
    </div>
)

export default UrlList
