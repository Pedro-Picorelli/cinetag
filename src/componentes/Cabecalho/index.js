import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';
import logo from './Logo-cinetag-branco 1.png'
import CabecalhoLink from 'componentes/CabecalhoLink';

function Cabecalho() {
    return (
        <header className={style.cabecalho}>
            <Link to="./">
                <img src={logo} alt='Logo cinetag' />
            </Link>
            <nav>
                <CabecalhoLink rul="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;