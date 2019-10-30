import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipanteComponent } from './participante/participante.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiniCursoComponent } from './mini-curso/mini-curso.component';


const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      {path: 'participante' , component: ParticipanteComponent },
      {path: 'minicurso', component:MiniCursoComponent},
    ] 

  },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
