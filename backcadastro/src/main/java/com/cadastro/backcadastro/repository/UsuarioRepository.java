package com.cadastro.backcadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cadastro.backcadastro.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long>{
    
}
