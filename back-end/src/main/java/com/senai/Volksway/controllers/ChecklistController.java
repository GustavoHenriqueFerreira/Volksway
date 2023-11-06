package com.senai.Volksway.controllers;

import com.senai.Volksway.dtos.ChecklistDto;
import com.senai.Volksway.models.ChecklistModel;
import com.senai.Volksway.repositories.ChecklistRepository;
import com.senai.Volksway.repositories.VeiculoRepository;
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
@RequestMapping(value = "/checklists", produces = {"application/json"})
public class ChecklistController {
    @Autowired //Injeção de dependência (deixar o código desacoplado, classe que utiliza funcionalidades de outras classes)
    ChecklistRepository checklistRepository;

    @Autowired
    FileUploadService fileUploadService;
    @Autowired
    private VeiculoRepository veiculoRepository;

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Object> criarChecklist(@ModelAttribute @Valid ChecklistDto checklistDto){
        ChecklistModel novoChecklist = new ChecklistModel();
        BeanUtils.copyProperties(checklistDto, novoChecklist);

        var veiculo = veiculoRepository.findById(checklistDto.id_veiculo());

        if (veiculo.isPresent()) {
            novoChecklist.setVeiculo(veiculo.get());
        } else {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("id veiculo não encontrado");
        }

        String urlImagem;

        try{
            urlImagem = fileUploadService.fazerUpload(checklistDto.imagem());
        }catch (IOException e){
            throw new RuntimeException(e);
        }

        novoChecklist.setFoto_pneu(urlImagem);

        return ResponseEntity.status(HttpStatus.CREATED).body(checklistRepository.save(novoChecklist));
    }

    @GetMapping
    public ResponseEntity<List<ChecklistModel>> listarChecklists() {
        return ResponseEntity.status(HttpStatus.OK).body(checklistRepository.findAll());
    }

    @GetMapping("/{idChecklist}")
    public ResponseEntity<Object> buscarChecklist(@PathVariable(value = "idChecklist") UUID id){
        Optional<ChecklistModel> checklistBuscado = checklistRepository.findById(id);

        if (checklistBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Checklist não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(checklistBuscado.get());
    }
}
