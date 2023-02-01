import Cadastro from "../Cadastro/Cadastro";

function Home(){
    return(
        <div class="container text-center">
            <h1 className="text-dark">Bem-Vindo a <span className="text-danger">Pixel</span>house</h1>
            <br />
            <Cadastro></Cadastro>
        </div>
    )
}

export default Home;