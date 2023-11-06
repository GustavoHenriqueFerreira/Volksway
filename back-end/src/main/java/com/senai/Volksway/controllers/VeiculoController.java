package com.senai.Volksway.controllers;

import com.senai.Volksway.dtos.VeiculoDto;
import com.senai.Volksway.models.VeiculoModel;
import com.senai.Volksway.repositories.VeiculoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController //Annotation para definir controller
@RequestMapping(value = "/veiculos", produces = {"application/json"})
public class VeiculoController {
    @Autowired //Injeção de dependência (deixar o código desacoplado, classe que utiliza funcionalidades de outras classes)
    VeiculoRepository veiculoRepository;

    @GetMapping("/{idVeiculo}")
    public ResponseEntity<Object> buscarVeiculo(@PathVariable(value = "idVeiculo") UUID id){
        Optional<VeiculoModel> veiculoBuscado = veiculoRepository.findById(id);

        if (veiculoBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Veiculo não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(veiculoBuscado.get());
    }

    @GetMapping
    public ResponseEntity<List<VeiculoModel>> listarVeiculo() {
        return ResponseEntity.status(HttpStatus.OK).body(veiculoRepository.findAll());
    };

    @PostMapping
    public ResponseEntity<Object> criarVeiculo(@RequestBody @Valid VeiculoDto veiculoDto){
        VeiculoModel novoVeiculo = new VeiculoModel();
        BeanUtils.copyProperties(veiculoDto, novoVeiculo);

        return ResponseEntity.status(HttpStatus.CREATED).body(veiculoRepository.save(novoVeiculo));
    }
}
