import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';


const NavBar = () => {
  return (
    <nav className={style.NavBar}>
      <ul className={style.moni}>
        <li>
          <NavLink to="/" end>  Inicio
          </NavLink>
        </li>
      </ul>
      <ul className={style.cate}>
        <li>
          <NavLink to="/category/Mujeres" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Mujeres
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Niños" className={({ isActive }) =>  {
            // console.log('isActive frutas:', isActive);
            return isActive ? 'ActiveOption' : 'Option';
          }}>
            Niños
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Hombres" className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
            Hombres
          </NavLink>
        </li>
      </ul>
      <div id="carrito" className="carrito">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
