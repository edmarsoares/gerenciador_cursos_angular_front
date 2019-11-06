import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../infraestructure/apiRest';

// @Injectable({providedIn: 'root'})
export abstract class Servicogenerico<T> {

    constructor(protected http:HttpClient,  protected entidade:string){

    }
 
    post<T>(object){
        const pathRequest = `${api}/${this.entidade}`; 

        return this.http.post<HttpResponse<T>>(pathRequest, object);
    }

    put<T>(object){
        const pathRequest = `${api}/${this.entidade}`; 

        return this.http.put<HttpResponse<T>>(pathRequest, object);
    }

    getAll<T>(): Observable<T[]>{
        console.log(api);   

        const pathRequest = `${api}/${this.entidade}`; 
    
        return this.http.get<T[]>(pathRequest);
    }

    getById(id : number): Observable<T>{
        const pathRequest = `${api}/${this.entidade}`; 

        return this.http.get<T>(`${pathRequest}/${id}`);
    }

    deleteById(id: number){
        const pathRequest = `${api}/${this.entidade}`; 

        this.http.delete(`${pathRequest}/${id}`);
    }
}