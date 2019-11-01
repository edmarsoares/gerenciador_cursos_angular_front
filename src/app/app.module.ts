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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ParticipanteComponent,
    MiniCursoComponent,
    RealtimeComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [RealtimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
