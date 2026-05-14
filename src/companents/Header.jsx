import '../App.css';
import HeroHeader from './HeroHeader';
import Nav from './Nav';
import SiteNav from './SiteNav';
import Main from './Main';

function Header() {
  return (
    <header className="site_header">
      <Nav />
      <SiteNav />
      <HeroHeader /> 
      <Main />
    </header>
  );
}

export default Header;