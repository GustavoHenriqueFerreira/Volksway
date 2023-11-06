package com.senai.Volksway.controllers;

import com.senai.Volksway.dtos.PropagandaDto;
import com.senai.Volksway.models.PropagandaModel;
import com.senai.Volksway.repositories.PropagandaRepository;
import com.senai.Volksway.services.FileUploadService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController //Annotation para definir controller
@RequestMapping(value = "/propagandas", produces = {"application/json"})
public class PropagandaController {
    @Autowired //Injeção de dependência (deixar o código desacoplado, classe que utiliza funcionalidades de outras classes)
    PropagandaRepository propagandaRepository;

    @Autowired
    FileUploadService fileUploadService;

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Object> criarPropaganda(@ModelAttribute @Valid PropagandaDto propagandaDto){
        PropagandaModel novaPropaganda = new PropagandaModel();
        BeanUtils.copyProperties(propagandaDto, novaPropaganda);

        String urlImagem;

        try{
            urlImagem = fileUploadService.fazerUpload(propagandaDto.img());
        }catch (IOException e){
            throw new RuntimeException(e);
        }

        novaPropaganda.setImg(urlImagem);

        return ResponseEntity.status(HttpStatus.CREATED).body(propagandaRepository.save(novaPropaganda));
    }

    @GetMapping
    public ResponseEntity<List<PropagandaModel>> listarPropagandas() {
        return ResponseEntity.status(HttpStatus.OK).body(propagandaRepository.findAll());
    }

    @GetMapping("/{idPropaganda}")
    public ResponseEntity<Object> buscarPropaganda(@PathVariable(value = "idPropaganda") UUID id){
        Optional<PropagandaModel> propagandaBuscada = propagandaRepository.findById(id);

        if (propagandaBuscada.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Propaganda não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(propagandaBuscada.get());
    }

    @PutMapping(value = "/{idPropaganda}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Object> editarPropaganda(@PathVariable(value = "idPropaganda") UUID id, @ModelAttribute @Valid PropagandaDto propagandaDto){

        Optional<PropagandaModel> propagandaBuscada = propagandaRepository.findById(id);

        if (propagandaBuscada.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Propaganda não encontrado");
        }

        PropagandaModel propagandaBd = propagandaBuscada.get();
        BeanUtils.copyProperties(propagandaDto, propagandaBd);

        String urlImagem;

        try{
            urlImagem = fileUploadService.fazerUpload(propagandaDto.img());
        }catch (IOException e){
            throw new RuntimeException(e);
        }

        propagandaBd.setImg(urlImagem);

        return ResponseEntity.status(HttpStatus.OK).body(propagandaRepository.save(propagandaBd));
    }

    @DeleteMapping("/{idPropaganda}")
    public ResponseEntity<Object> deletarPropaganda(@PathVariable(value = "idPropaganda") UUID id){
        Optional<PropagandaModel> propagandaBuscada = propagandaRepository.findById(id);

        if (propagandaBuscada.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Propaganda não encontrado");
        }

        propagandaRepository.delete(propagandaBuscada.get());
        return ResponseEntity.status(HttpStatus.OK).body("Propaganda deletado com sucesso!");
    }
}
