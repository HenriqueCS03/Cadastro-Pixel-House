import React, {useEffect,useState} from "react";
import axios  from 'axios';
import { useHistory } from 'react-router-dom';


function Login() {

    const [usuario,setUsuario] = useState({
        nome : '',
        dataNascimento : '',
        email : '',
        senha:''
    });
    
    const history = useHistory();

    function handleChange(event){
        setUsuario({...usuario,[event.target.name]:event.target.value});
    }

    function limpar(){
        setUsuario({
            nome : '',
            dataNascimento : '',
            email : '',
            senha:''
        })
    }

    const submit = (e) => {
        e.preventDefault()
    
        axios({
            method: "post",
            url: "http://localhost:8080/api/usuarios/",
            data: usuario,
            headers: { "Content-Type": "application/json"}
        })
            .then((response) => {
                setUsuario(response.data)
                history.push('/cadastrados');
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }


    
    
  return (
        
        <div className="card">
            <div >
            <h2>Cadastro</h2>
            </div>
            <br />
            <form onSubmit={submit} action="">
                <div >
                    
                    <div class="form-floating mb-3">
                        
                        <input class="form-control" onChange={handleChange} value={usuario.nome} type="text" name="nome" placeholder="Nome Completo" required/>
                        <label for="floatingInput">Nome Completo: </label>
                    </div>
                    <div class="form-floating mb-3">
                        
                        <input class="form-control"  onChange={handleChange} value={usuario.dataNascimento} type="date" name="dataNascimento" required/>
                        <label for="floatingInput">Data de Nascimento: </label>
                    </div>
                    <div class="form-floating mb-3">
                        
                        <input class="form-control"  placeholder="name@example.com" onChange={handleChange} value={usuario.email} type="email" name="email"  required/>
                        <label for="floatingInput">E-mail: </label>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" onChange={handleChange} value={usuario.senha} type="password" name="senha" placeholder="Password" required/>
                        <label for="floatingInput">Senha: </label>
                    </div>
                    <br />
                   <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <input class="btn btn-primary btn-lg" type="submit" value="Finalizar Cadastro" />
                   
                        <button class="btn btn-secondary btn-lg" onClick={()=> limpar()} type="button">Limpar</button>

                    </div>
                </div>
                
            </form>
        </div>
    
  );
}

export default Login;