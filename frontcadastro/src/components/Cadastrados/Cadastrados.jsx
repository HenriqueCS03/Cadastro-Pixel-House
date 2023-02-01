import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import ModalAtualizacao from "../ModaAtualizacao/ModalAtualizacao";
import { Link } from "react-router-dom";


function Cadastrados() {

  const [usuarios, setUsuarios] = useState([]);

  const [modal, setModal] = useState(false);

  const [data, setData] = useState({});

  function validaModal(param){
    setData(param);
  }

  useEffect(() => {
    axios.get("http://localhost:8080/api/usuarios/").then(result => {
      setUsuarios(result.data);
    })
  }, [])

  const handleDelete = (e,i) => {
    
    axios({
      method: "Delete",
      url: `http://localhost:8080/api/usuarios/${e}`,
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        setUsuarios(usuarios.filter(function (y,p) {
          return p !== i
        })); 
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const callback = (param) =>{
    setUsuarios(usuarios.map(e =>{
      return  e.id === param.id ? e = param : e = e;
    }) 

  )};
  

  return (
    <div id="header" className="container">
      <div>
        <Link to="/"><button class="btn btn-outline-info">Sair</button></Link>
      </div> 
        <br />
    {modal ? 
                (<ModalAtualizacao props={data} parentCallback={callback} 
                  onClose={()=> setModal(false)}/> 
                ) : null}
    
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Data_Nascimento</th>
          <th scope="col">E-mail</th>
          <th scope="col">Senha</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      
      <tbody>
      
        {
          usuarios.map((user, i) => (

            <tr key={user.id}>

              <td>{user.nome}</td>
              <td>{user.dataNascimento}</td>
              <td>{user.email}</td>
              <td>{user.senha}</td>
              <td>
                
                <a href="#header"><button class="btn btn-warning" onClick={()=> [setModal(true),validaModal(user)]} type="button">Alterar</button></a>
                &nbsp;
                &nbsp;
                <button class="btn btn-danger"  onClick={()=> handleDelete(user.id,i)} type="button">Deletar</button>
              </td>
              
            </tr>
          )
          )}
          

      </tbody>
    </table>
    </div>
  );
}

export default Cadastrados;