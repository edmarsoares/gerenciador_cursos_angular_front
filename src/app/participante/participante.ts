import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../entidade/usuario';


export class Participante{

    id : number;
    dataNascimento: Date;
    cpf : string;
    usuario: Usuario;

    constructor(){
        this.usuario = new Usuario;
    }

    static getControl(): FormGroup {
        return new FormGroup({
            id: new FormControl(),
            dataNascimento: new FormControl('',[Validators.required]),
            cpf: new FormControl('',[Validators.required]),
            usuario: Usuario.getControl()
        });
    }

    static getInicializeControl(participante: Participante): FormGroup{

        return new FormGroup({
            id: new FormControl(participante.id),
            dataNascimento: new FormControl(participante.dataNascimento),
            cpf: new FormControl(participante.cpf),
            usuario: Usuario.getInicializeControls(participante.usuario)
        })
    }
}