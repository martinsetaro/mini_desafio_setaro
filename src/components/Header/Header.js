import {Link} from 'react-router-dom';
import './header.scss'

const Header = () => {
  return (
    <div className="header">
         <Link to='/tabla'>Tabla</Link>
         <Link to='/formulario'>Formulario</Link>
    </div>
  )
}

export default Header
