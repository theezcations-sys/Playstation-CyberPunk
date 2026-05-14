import './Nav.css';
import logo from '../assis/logo.png';
import psPlus from '../assis/psPlus.png';
import '../App.css'

function Nav() {
  return (
    <nav className="site_bar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="bar_list">
        <li><i class='bx bx-home'></i><span>Home</span></li>
        <li><i class='bx bx-joystick'></i><span>Games</span></li>
        <li><i class='bx bx-tv'></i><span>Consoles</span></li>
        <li><i class='bx bx-headphone'></i><span>Accessories</span></li>
        <li><i class='bx bx-plus-medical'></i><span>Ps Plus</span></li>
        <li><i class='bx bx-news'></i><span>news</span></li>
        <li><i class='bx bx-group'></i><span>Communitiy</span></li>
        <li><i class='bx bx-store'></i><span>Store</span></li>
        <li><i class='bx bx-support'></i><span>support</span></li>
      </ul>
      <img src={psPlus} alt="PsPluso" className="psPlus" />
    </nav>
  );
}

export default Nav;