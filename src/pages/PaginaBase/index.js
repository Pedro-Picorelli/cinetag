import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import { Outlet } from "react-router-dom";

const { default: Cabecalho } = require("componentes/Cabecalho");
const { default: FavoritosProvider } = require("contextos/Favoritos");

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;