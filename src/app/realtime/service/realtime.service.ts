import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Subject, ReplaySubject } from 'rxjs';
import { EventSourcePolyfill } from 'event-source-polyfill';


@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  private onMessageSubject: Subject<any> = new ReplaySubject();
  private eventSourceConnection : any;

  constructor() { }

  /**
   * Método responsável por estabelecer uma conexão SSE com o servidor.
   *
   * @param tenant identificador do cliente; nome do schema;
   * @param idPesquisa identificador da pesquisa a ser escutada na conexão.
   */
  connect() {

    const uri = "http://localhost:8080/api/realtime";


    this.eventSourceConnection = new EventSourcePolyfill(uri, 
    );
    this.eventSourceConnection.onopen = () => {
      this.onOpenConnection(this.eventSourceConnection);
    };

    this.eventSourceConnection.onmessage = (message: any) => {

      if (message.data === 'keep-alive') {
        console.log('[TempoRealService.eventSourceConnection.onMessage] ping!');
        return;
      }

      this.onMessage(message);
    };

    this.eventSourceConnection.onerror = (err) => {

      console.log('[TempORealService.eventSourceConnection.onerror] error:', err);
    };

  }

  /**
   * Fecha a conexão SSE estabelecida se houver uma.
   */
  disconnect() {
    console.log('[TempoRealService.disconnect] doing...');

    if (this.eventSourceConnection) {
      this.eventSourceConnection.close();
      console.log('[TempoRealService.disconnect] did it!');
    } else {
      console.log('[TempoRealService.disconnect] no connection!');
    }
  }

  /**
   * Registra um callback que será chamado sempre que novos dados de Realtime
   * forem enviados através da conexão estabelecida anteriormente.
   * @param onMessageCallback
   */
  subscribe(onDataCallback: (data: any) => void): Subscription {
    return this.onMessageSubject.subscribe(onDataCallback);
  }

  /**
   * Callback chamado quando a conexão SSE é estabelecida
   * @param eventSourcePolyfill conexão estabelecida
   */
  onOpenConnection(eventSourcePolyfill: any) {
    console.log('[RealtimeService.onOpenConnection] SSE connection established!');
    // tslint:disable-next-line: no-parameter-reassignment
  }

  /**
   * Callback chamado quando uma nova mensagem é recebida através da conexão SSE
   * @param message mensagem recebida
   */
  onMessage(message: any) {
    // console.log('[RealtimeService.onMessage] new message: ', message.data);
    // const realtime : Realtime = message;
    const realtime: any = JSON.parse(message.data);
    // console.log('[RealtimeService.onMessage] new message[realtime]: ', realtime);
    this.onMessageSubject.next(realtime);
  }

}
