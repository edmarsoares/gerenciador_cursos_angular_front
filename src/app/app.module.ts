import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParticipanteComponent } from './participante/participante.component';
import { MiniCursoComponent } from './mini-curso/mini-curso.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { RealtimeService } from './realtime/service/realtime.service';
import { ProfessorComponent } from './professor/professor.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticipanteService } from './participante/service/participante.service';
import { ListagemParticipanteComponent } from './participante/listagem-participante/listagem-participante.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ParticipanteComponent,
    MiniCursoComponent,
    RealtimeComponent,
    ProfessorComponent,
    ListagemParticipanteComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
    
  ],
  providers: [RealtimeService, ParticipanteService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
