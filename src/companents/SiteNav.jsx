import '../companents/SiteNav.css';
import logo from '../assis/profil.png';

function SiteNav() {
    return(
        <nav className="site_nav">
            <ul className="nav_list">
                <li>Home</li>
                <li>Games</li>
                <li>Consoles</li>
                <li>Accessories</li>
                <li>PsPlus</li>
                <li>news</li>
                <li>Communitiy</li>
                <li>Store</li>
            </ul>
            <input type="text" placeholder="Search..." />
            <i class='bx bx-search'></i>
            <i class='bx bx-bell'></i>
            <img src={logo} alt="Profile" className="profile-img" />
            <i class='bx bx-chevron-down'></i>
        </nav>
    )
};

export default SiteNav;