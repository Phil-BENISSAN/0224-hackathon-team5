import '../styles/header.css'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header>
     <Link
     to="/actus">
      Beeskip
     </Link>
     <Link><h2 className='features1'>Features</h2></Link>
     <Link><h2 className='features2'>Features</h2></Link>
     <Link><h2 className='connexion'>Connexion</h2></Link>
     <Link><h2 className='try'>Essayer gratuitement</h2></Link>
    </header>
  );
}
