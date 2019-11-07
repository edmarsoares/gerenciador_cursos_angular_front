
import { FormGroup, FormControl, Validators } from '@angular/forms';
export class Usuario {

    id: string;
    nome: string;
    email:string;
    username: string;
    password: string;
    confirmPassword: string;

    constructor(){}

    static getControl(): FormGroup{
        return new FormGroup({
            id: new FormControl(),
            nome: new FormControl('',[Validators.required]),
            email: new FormControl('',[Validators.required]),
            username: new FormControl('',[Validators.required]),
            password: new FormControl('',[Validators.required]),
            confirmPassword: new FormControl()
        });
    }

    static getInicializeControls(usuario: Usuario): FormGroup{
        return new FormGroup({
            id: new FormControl(usuario.id),
            nome: new FormControl(usuario.nome),
            email: new FormControl(usuario.email),
            username: new FormControl(usuario.username),
        })
    }
}