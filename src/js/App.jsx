import * as React from 'react'
import Header from './components/Header.jsx'
import Bio from './components/Bio.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import UrlList from './components/UrlList.jsx'
import { Element } from 'react-scroll'
import Skill from './components/Skill.jsx'
import '../css/App.css'

const App = () => (
    <div styleName='mainDiv'>
        <Header />

        <div styleName='mainContainer'>
            <div styleName='windowContainer'>
                <Element name='bio'>
                    <Bio />
                </Element>
            </div>

            <div styleName='windowContainer'>
                <Element name='skills'>
                    <Skill />
                </Element>
            </div>

            <div styleName='windowContainer'>
                <Element name='experience'>
                    <Experience />
                </Element>
            </div>

            <div styleName='windowContainer'>
                <Element name='project' styleName="w750">
                    <Project />
                </Element>
            </div>

            <div styleName='windowContainer'>
                <Element name='projectUrls'>
                    <UrlList />
                </Element>
            </div>
        </div>
    </div>
)

export default App
