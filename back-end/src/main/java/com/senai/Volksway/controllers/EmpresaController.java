package com.senai.Volksway.controllers;

import com.senai.Volksway.dtos.EmpresaDto;
import com.senai.Volksway.models.EmpresaModel;
import com.senai.Volksway.repositories.EmpresaRepository;
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
@RequestMapping(value = "/empresas", produces = {"application/json"})
public class EmpresaController {
    @Autowired //Injeção de dependência (deixar o código desacoplado, classe que utiliza funcionalidades de outras classes)
    EmpresaRepository empresaRepository;

    @GetMapping("/{idEmpresa}")
    public ResponseEntity<Object> buscarEmpresa(@PathVariable(value = "idEmpresa") UUID id){
        Optional<EmpresaModel> empresaBuscada = empresaRepository.findById(id);

        if (empresaBuscada.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Empresa não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(empresaBuscada.get());
    }

    @GetMapping
    public ResponseEntity<List<EmpresaModel>> listarEmpresas() {
        return ResponseEntity.status(HttpStatus.OK).body(empresaRepository.findAll());
    };

    @PostMapping
    public ResponseEntity<Object> criarEmpresa(@RequestBody @Valid EmpresaDto empresaDto){
        EmpresaModel novaEmpresa = new EmpresaModel();
        BeanUtils.copyProperties(empresaDto, novaEmpresa);

        return ResponseEntity.status(HttpStatus.CREATED).body(empresaRepository.save(novaEmpresa));
    }
}
