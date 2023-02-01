package com.cadastro.backcadastro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.backcadastro.entity.Usuario;
import com.cadastro.backcadastro.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/")
    @CrossOrigin("http://localhost:3000")
    public List <Usuario> buscarTodos(){
        return usuarioService.buscarTodos();
    }

    @PostMapping("/")
    @CrossOrigin("http://localhost:3000")
    public Usuario inserir(@RequestBody Usuario usuario){
        return usuarioService.inserir(usuario);
    }

    @PutMapping("/")
    @CrossOrigin("http://localhost:3000")
    public Usuario alterar(@RequestBody Usuario usuario) {
        return usuarioService.alterar(usuario);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin("http://localhost:3000")
    public void remover(@PathVariable("id") Long id){
        usuarioService.excluir(id);
    }
}
