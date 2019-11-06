import { Injectable } from '@angular/core';
import { Servicogenerico } from 'src/app/service/servicogenerico';
import { Participante } from '../participante';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/app/infraestructure/apiRest';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService extends Servicogenerico<Participante> {

  constructor(protected http: HttpClient) {
    super(http, 'participante');
  }
}
