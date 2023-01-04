import '../appAboutHero/appAboutHero.scss'

import appHeroAbout from '../../Utils/Images/appHeroAbout.png'
import MovingText from "react-moving-text";


const appAboutHeroInfo = `
    <span>Meet your host</span>
    <h2>Jacob Paulaner</h2>
    <p>Jacob has a background in audio engineering, and has been podcasting since the early days.  </br> </br>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
`

const AppAboutHero = () => {
    return (
        <section className='AboutHeroSection'>
            <MovingText
                type="fadeInFromLeft"
                duration="2000ms"
                delay="0s"
                direction="alternate"
                timing="ease-in-out"
                iteration="1"
                fillMode="backwards"
                className='AboutHeroSection__Wrapper'
                dangerouslySetInnerHTML={{ __html: appAboutHeroInfo }}/>
            <div className='AboutHeroSection__Img__Wrapper'>
                <figure>
                    <img src={appHeroAbout} alt="About-Hero"/>
                </figure>
            </div>
        </section>
    )
}
export default AppAboutHero
