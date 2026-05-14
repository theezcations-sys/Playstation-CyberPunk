import './HeroHeader.css'
import '../App.css'
import logo from '../assis/heroBg.png'
import cyberpunk from '../assis/cyberpunk.png'

function HeroHeader() {
    return (
        <section className='hero_header'>
            <img src={logo} alt="" className='hero_bg' />
            <img src={cyberpunk} alt="" className='cyberpunk_img' />
            <p className="n_lvl">NEXT LEVEL GAMING</p>
            <h1 className='title'><i>PLAYSTATION</i></h1>
            <p className="subtle">Step into the fuure of gaming with PlaySattion . No limits. All immersion</p>
            <button className="explore_now"><span>Explore Now</span> <i class='bx bx-chevron-right'></i></button>
            <div className="scroll_x">
                <button className="left arrow-line"><i class='bx bx-chevron-left'></i></button>
                <button className="right arrow-line"><i class='bx bx-chevron-right'></i></button>
            </div>
        </section>

    )
}

export default HeroHeader;