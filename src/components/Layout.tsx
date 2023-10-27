import { Link, Outlet } from 'react-router-dom';
import GaragePubLogo from '../assets/garagePubLogo-removebg-preview.png';

function Layout() {
  return (
    <>
      <header>
        <div><button>Loc</button></div>
        <div><img src={ GaragePubLogo } alt="Garage Pub Logo" /></div>
        <nav>
          <Link target="_blank" to="https://www.instagram.com/garagepubmasterpiecesg/">Instagram</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        created by ruy
      </footer>
    </>
  );
}

export default Layout;
