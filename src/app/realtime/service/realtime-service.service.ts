import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventSourcePolyfill } from 'event-source-polyfill';


@Injectable({
  providedIn: 'root'
})
export class RealtimeServiceService {

  subjectRealTime: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  private eventConnection: any;
  dataMessage: any;

  constructor() { }

  connect() {

    this.eventConnection = new EventSourcePolyfill("http://localhost:8080/api/sse");

    this.eventConnection.onopen = () => {
      this.onOpenConnection(this.eventConnection);
    }

    this.eventConnection.onmessage = (message:any)=>{

      if (message.data === 'keep-alive') {
        console.log('[onMessage] ping!');
        return;
      }

      this.onMessage(message);
    }

    this.eventConnection.onerror = (err) => {
      console.log('Error on connection', err);
      
    }
  }



  onOpenConnection(eventSourcePolyfill: any) {
    console.log('SSE connection established!');
    // tslint:disable-next-line: no-parameter-reassignment
  }

  disconnect() {
    if (this.eventConnection) {
      this.eventConnection.close();
      console.log('disconnected !');
    } else {
      console.log('no connection!');
    }
  }

  subscribe(dataRealTimeCallBack :(data: any) => void){
    return this.subjectRealTime.subscribe(dataRealTimeCallBack);
  }

  onMessage(message: any) {
    this.dataMessage = JSON.parse(message.data);

    this.subjectRealTime.next(this.dataMessage);
    console.log("dados do servidor ", message.data);
  }

}
