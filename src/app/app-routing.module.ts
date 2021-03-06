import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipanteComponent } from './participante/participante.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiniCursoComponent } from './mini-curso/mini-curso.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { ListagemParticipanteComponent } from './participante/listagem-participante/listagem-participante.component';


const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      {path: 'participante' , component: ParticipanteComponent },
      {path: 'listagem', component: ListagemParticipanteComponent},
      {path: 'minicurso', component:MiniCursoComponent},
      {path: 'realtime', component: RealtimeComponent}
    ] 

  },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
