import React from "react";
import { useState } from "react";
import axios from "axios";

const ModalAtualizacao = ( {  onClose = ()=> {}, props, parentCallback}) => {


  const [usuario,setUsuario] = useState({
    id: props.id,
    nome : props.nome,
    dataNascimento : props.dataNascimento,
    email : props.email,
    senha: props.senha
  });
  
  function handleChange(event){
    setUsuario({...usuario,[event.target.name]:event.target.value});
  }

  const submit = (e) => {
    e.preventDefault()

    axios({
        method: "put",
        url: "http://localhost:8080/api/usuarios/",
        data: usuario,
        headers: { "Content-Type": "application/json"}
    })
        .then((response) => {
            setUsuario(response.data);
            parentCallback(response.data)
            onClose();
        })
        .catch(function (error) {
            console.log(error);
        });
    
}




function limpar(){
  setUsuario({
      nome : '',
      dataNascimento : '',
      email : '',
      senha:''
  })
}

  // const handleOutside = (e) =>{
  //     if(e.target.id === id){
  //       OnClose();
  //     }
  //}

  return (
    
    <div class="card">
      <div >
        <button className="btn-close" aria-label="Close" type="button" onClick={onClose}></button>
      </div>
      <br />
      <div>
        <div class="container text-center">
          <h3 >Cadastrar</h3>
        </div>
        <br />
      </div >
      <form  onSubmit={submit} action="">
        <div >
          <div class="form-floating mb-3">
              
              <input className="form-control" onChange={handleChange} value= {usuario.nome} type="text" name="nome" required/>
              <label className="form-label" >Nome Completo: </label>
          </div>
          <div class="form-floating mb-3">
              
              <input className="form-control"  onChange={handleChange} value={usuario.dataNascimento} type="date" name="dataNascimento" required/>
              <label className="form-label">Data de Nascimento: </label>
          </div>
          <div class="form-floating mb-3">
              
              <input className="form-control" onChange={handleChange} value={usuario.email} type="email" name="email" required/>
              <label className="form-label" >E-mail: </label>
          </div>
          <div class="form-floating mb-3">
              
              <input class="form-control" onChange={handleChange} value={usuario.senha} type="text" name="senha" required/>
              <label for="floatingInput" >Senha: </label>
          </div>
        </div>
        <br />
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <div className="col">
            <input class="btn btn-success" type="submit" value="Alterar" />
          </div>
          <div>
            <button class="btn btn-secondary" onClick={()=> limpar()} type="button">Limpar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalAtualizacao;