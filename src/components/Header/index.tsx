import { HeaderBar } from "./styles"
import logo from '../../assets/images/logo.svg';

const Header = () => (
    <HeaderBar>
        <div>
            <img src={logo} alt="logo" />
            <h2>Viva experiências gastronômicas <br /> no conforto da sua casa</h2>
        </div>
    </HeaderBar>
)

export default Header