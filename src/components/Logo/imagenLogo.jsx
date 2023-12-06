import {PerfumeriaOrquidea} from '../NavBar/NavBar.module.css'
import img from "./imagenLogo.jpg"

const Logo = () => {
    return (
        <div>
            <a href="#"><img src={img} alt="Perfumeria" className={PerfumeriaOrquidea}/></a>
        </div>
    );
  };
  export default Logo