package com.senai.Volksway.dtos;

import com.senai.Volksway.models.UsuarioModel;
import jakarta.validation.constraints.NotBlank;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.UUID;

public record PropagandaDto(
        @NotBlank UUID id_usuario,
        @NotBlank String titulo,

        @NotBlank String url,

        @NotBlank String descricao,
        @NotBlank String publico_alvo,
        @NotBlank Date data_limite,

        @NotBlank float preco,
        @NotBlank boolean importancia,
        @NotBlank String nomeTipoPropaganda,

        MultipartFile img) {

}