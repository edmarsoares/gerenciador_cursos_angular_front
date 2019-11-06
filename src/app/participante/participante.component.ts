import { Component, OnInit } from '@angular/core';
import { ParticipanteService } from './service/participante.service';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {

  constructor(private participanteService:  ParticipanteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    debugger;
    this.participanteService.getById(1).subscribe(data => {
      
      console.log("vamos porra", data);
    })
  }

}


