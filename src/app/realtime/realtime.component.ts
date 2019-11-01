import { Component, OnInit, OnDestroy } from '@angular/core';
import { RealtimeService } from './service/realtime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit, OnDestroy {
  
  dadosTempoReal:any[];
  subscription: Subscription;

  constructor(private realtimeService: RealtimeService) { }

  ngOnInit() {

    this.realtimeService.connect();

    this.subscription = this.realtimeService.subscribe(data => {
      this.dadosTempoReal = data;
      console.log("mostrando dados ", data);
      
    });

    console.log("Testando realtime");
    
  }

  connect(){ 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.realtimeService.disconnect();
  }


}
