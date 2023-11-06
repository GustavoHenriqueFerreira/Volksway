package com.senai.Volksway.controllers;

import com.senai.Volksway.dtos.InteresseDto;
import com.senai.Volksway.models.InteresseModel;
import com.senai.Volksway.repositories.InteresseRepository;
import com.senai.Volksway.repositories.PropagandaRepository;
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
@RequestMapping(value = "/interesses", produces = {"application/json"})
public class InteresseController {
    @Autowired //Injeção de dependência (deixar o código desacoplado, classe que utiliza funcionalidades de outras classes)
    InteresseRepository interesseRepository;
    @Autowired
    private PropagandaRepository propagandaRepository;

    @GetMapping("/{idInteresse}")
    public ResponseEntity<Object> buscarInteresse(@PathVariable(value = "idInteresse") UUID id){
        Optional<InteresseModel> interesseBuscado = interesseRepository.findById(id);

        if (interesseBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Interesse não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(interesseBuscado.get());
    }

    @GetMapping
    public ResponseEntity<List<InteresseModel>> listarInteresses() {
        return ResponseEntity.status(HttpStatus.OK).body(interesseRepository.findAll());
    };

    @PostMapping
    public ResponseEntity<Object> criarInteresse(@RequestBody @Valid InteresseDto interesseDto){
        InteresseModel novoInteresse = new InteresseModel();
        BeanUtils.copyProperties(interesseDto, novoInteresse);

        var propaganda = propagandaRepository.findById(interesseDto.id_propaganda());
        var usuario = propagandaRepository.findById(interesseDto.id_usuario());

        if (propaganda.isPresent()) {
            novoInteresse.setPropaganda(propaganda.get());
        } else {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("id propaganda não encontrado");
        }

        if (usuario.isPresent()) {
            novoInteresse.setPropaganda(usuario.get());
        } else {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("id usuario não encontrado");
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(interesseRepository.save(novoInteresse));
    }
}
