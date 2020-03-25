import * as React from 'react'
import {
    Window,
    WindowContent,
    WindowHeader,
    Tab,
    Tabs,
    TabBody,
    Fieldset,
    reset,
    themes,
    Button,
} from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { scrollNext } from './Window.jsx'
import styles from '../../css/Window.css'

const ResetStyles = createGlobalStyle`
  ${reset}
`

class Experience extends React.Component {
    state = {
        activeTab: 0,
        tabTitles: [
            'Destek Muhendislik',
            'Arisdot',
            'Bulutsoft',
            'Dipnot'
        ],
    }
    handleChange = value => {
        this.setState({ activeTab: value })
        switch (value) {
            case 0:
                this.setState({
                    tabTitles: [
                        'Destek Muhendislik',
                        'Arisdot',
                        'Bulutsoft',
                        'Dipnot'
                    ]
                })
                break;
            case 1:
                this.setState({
                    tabTitles: [
                        'Destek',
                        'Arisdot Digital Software Agency',
                        'Bulutsoft',
                        'Dipnot'
                    ]
                })
                break;
            case 2:
                this.setState({
                    tabTitles: [
                        'Destek',
                        'Arisdot',
                        'Bulutsoft Software & Media',
                        'Dipnot'
                    ]
                })
                break;
            case 3:
                this.setState({
                    tabTitles: [
                        'Destek',
                        'Arisdot',
                        'Bulutsoft',
                        'Dipnot Web Design'
                    ]
                })
                break;
        }
    }

    render() {
        const { activeTab } = this.state
        return (
            <div>
                <ResetStyles />
                <ThemeProvider theme={themes.water}>
                    <Window styleName='styles.windowSpacing'>
                        <WindowHeader styleName='styles.windowHeader'>💻 Experience.exe</WindowHeader>
                        <WindowContent>
                            <Tabs value={activeTab} onChange={this.handleChange}>
                                <Tab value={0}>{this.state.tabTitles[0]}</Tab>
                                <Tab value={1}>{this.state.tabTitles[1]}</Tab>
                                <Tab value={2}>{this.state.tabTitles[2]}</Tab>
                                <Tab value={3}>{this.state.tabTitles[3]}</Tab>
                            </Tabs>
                            <div>
                                {activeTab === 0 && (
                                    <TabBody>
                                        <Fieldset label="Full Stack Web Developer">
                                            Jan 2019 -– Present
                                            <ul styleName='listText'>
                                                <li styleName='itemText'>
                                                    Create development, staging, production environments using docker.
                                                </li>
                                                <li styleName='itemText'>
                                                    Build CI / CD pipelines with TravisCI.
                                                </li>
                                                <li styleName='itemText'>
                                                    Write E2E tests with Cypress and API tests with Postman.
                                                </li>
                                                <li styleName='itemText'>
                                                    Implement frontend features using Vue.js and Element UI.
                                                </li>
                                                <li styleName='itemText'>
                                                    Implement Authentication System using JWT and Redis.
                                                </li>
                                                <li styleName='itemText'>
                                                    Responsible for people Management, including goal setting and providing performance feedback.                                                </li>
                                                <li styleName='itemText'>
                                                    Work with our team to analyze customer needs and transition them into software solutions.
                                                </li>
                                                <li styleName='itemText'>
                                                    Technology:  Node.js, Vue.js, React.js, Testing(E2E, Postman), CI/CD, Docker, AWS, Redis
                                                </li>
                                            </ul>
                                            <br />
                                        </Fieldset>
                                    </TabBody>
                                )}
                                {activeTab === 1 && (
                                    <TabBody>
                                        <Fieldset label="Full Stack Web Developer">
                                            Feb 2018 –- Sep 2018
                                            <ul styleName='listText'>
                                                <li styleName='itemText'>
                                                    Develop and deploy static websites with Amazon S3.
                                                </li>
                                                <li styleName='itemText'>
                                                    Delivered an educational web application using React and Node.
                                                </li>
                                                <li styleName='itemText'>
                                                    Developed an e-commerce portal using Laravel and Vue.js.
                                                </li>
                                                <li styleName='itemText'>
                                                    Work with Express or similar back-end Node.js web application frameworks.
                                                </li>
                                                <li styleName='itemText'>
                                                    Technology: Node.js, Vue.js, React.js, Postgresql
                                                </li>
                                            </ul>
                                            <br />
                                        </Fieldset>
                                    </TabBody>
                                )}
                                {activeTab === 2 && (
                                    <TabBody>
                                        <Fieldset label="Web Developer">
                                            Sep 2016 -– Dec 2017
                                            <ul styleName='listText'>
                                                <li styleName='itemText'>
                                                    Work on a tourism agencies CRM with PHP(Laravel) and Jquery.
                                                </li>
                                                <li styleName='itemText'>
                                                    Develop app integration with REST / SOAP and other APIs for Google Maps, social media logins, payment processors, and other services.
                                                </li>
                                                <li styleName='itemText'>
                                                    Technology: PHP(Laravel), JavaScript ES6, Linux
                                                </li>
                                            </ul>
                                            <br />
                                        </Fieldset>
                                    </TabBody>
                                )}
                                {activeTab === 3 && (
                                    <TabBody>
                                        <Fieldset label="Web Developer">
                                            Jan 2016 -– Aug 2016
                                            <ul styleName='listText'>
                                                <li styleName='itemText'>
                                                    Develop and deploy websites.
                                                </li>
                                                <li styleName='itemText'>
                                                    Convert PSD templates to code with HTML, CSS, JS and connect to user panel with PHP.
                                                </li>
                                                <li styleName='itemText'>
                                                    Technologies: PHP, HTML, CSS, Mysql, REST & SOAP, Git
                                                </li>
                                            </ul>
                                            <br />
                                        </Fieldset>
                                    </TabBody>
                                )}
                            </div>
                        </WindowContent>
                        <div styleName='buttonGroup'>
                            <Button onClick={() => scrollNext('skills', -150)}><span>Back ⇑</span></Button>
                            <Button onClick={() => scrollNext('project', -150)}><span>Next ⇓</span></Button>
                        </div>
                    </Window>
                </ThemeProvider>
            </div>
        )
    }
}

export default Experience
