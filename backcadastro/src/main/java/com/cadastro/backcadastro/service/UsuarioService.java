package com.cadastro.backcadastro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.backcadastro.entity.Usuario;
import com.cadastro.backcadastro.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
        
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> buscarTodos(){
        return usuarioRepository.findAll();
    }

    public Usuario inserir(Usuario usuario){
        return usuarioRepository.saveAndFlush(usuario);
    }

    public Usuario alterar(Usuario usuario){
        return usuarioRepository.saveAndFlush(usuario);
    }

    public void excluir(Long id){
        Usuario usuario = usuarioRepository.findById(id).get();
        usuarioRepository.delete(usuario);
    }

}
