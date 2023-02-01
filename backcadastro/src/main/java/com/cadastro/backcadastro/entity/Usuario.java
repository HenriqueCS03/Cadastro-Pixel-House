package com.cadastro.backcadastro.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "T_Pixel_Usuarios")
@Data
public class Usuario {
    
    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)  
    @Column(name="id")
    private Long id;
    
    @Column(name ="nome")
    private String nome;
    
    @Column(name="dataNascimento")
    @Temporal(TemporalType.DATE) 
    private Date dataNascimento;
    
    @Column(name="email")
    private String email;

    @Column(name="senha")
    private String senha;

}

