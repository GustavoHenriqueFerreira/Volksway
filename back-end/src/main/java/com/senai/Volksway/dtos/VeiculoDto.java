package com.senai.Volksway.dtos;

import com.senai.Volksway.models.VeiculoModel;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public record VeiculoDto(
        @NotBlank UUID id_cliente,
        @NotBlank String marca,

        @NotBlank String placa,

        @NotBlank String codigo_chassi) {

}
