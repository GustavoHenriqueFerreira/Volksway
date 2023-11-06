package com.senai.Volksway.dtos;

import com.senai.Volksway.models.PropagandaModel;
import com.senai.Volksway.models.UsuarioModel;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public record InteresseDto(
        @NotBlank UUID id_propaganda,
        @NotBlank UUID id_usuario,

        @NotBlank boolean meio_contato_email) {

}