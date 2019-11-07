import { Component, OnInit } from '@angular/core';
import { ParticipanteService } from './service/participante.service';
import { FormGroup } from '@angular/forms';
import { Participante } from './participante';


@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private participanteService:  ParticipanteService) { }

  ngOnInit() {
    this.formGroup= Participante.getControl();
    console.log("Inicializando os formControls", this.formGroup.controls);
    
  }

  getAll(){
    debugger;
    this.participanteService.getById(1).subscribe(data => {
      
      console.log("vamos porra", data);
    })
  }

}


