import'../App.css'
import HeroHeader from './HeroHeader'
import './Main.css'

import lyberPunk from '../assis/lyberPunk.png'
import ghost from '../assis/ghost.png'
import horizon from '../assis/horizon.png'
import spiderman from '../assis/spiderman.png'
import theLast from '../assis/theLast.png'

function Main() {
    return (
        <main>
            <section className='main_section'>
                <p className='featured'><span>// FEATURED GAMES ////</span> <span>View all <i class='bx bx-chevron-right'></i></span></p>
                <div className="main_div">
                    <img src={lyberPunk} alt="image" />
                    <img src={ghost} alt="image" />
                    <img src={horizon} alt="image" />
                    <img src={spiderman} alt="image" />
                    <img src={theLast} alt="image" />
                </div>
            </section>
        </main>
    )
}

export default Main;