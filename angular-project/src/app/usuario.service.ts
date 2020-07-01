import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {

    let usuario = new Usuario();
    usuario.nome = "Lucas";
    usuario.email = "lucasdemoraesc@gmail.com";

    return usuario;
  }

  public getList(): Usuario[] {

    return [
      {
        nome: "Lucas Moraes",
        email: "lucasdemoraesc@gmail.com"
      },
      {
        nome: "Karine Moraes",
        email: "karinedemoraes@gmail.com"
      },
      {
        nome: "Leny Teodoro",
        email: "leny_teodorodemoraes@hotmail.com"
      },
      {
        nome: "Isael Corrêa",
        email: "isael.correa@gmail.com"
      },
      {
        nome: "Sâmea Natasha",
        email: "samea.natasha0737@gmail.com"
      }
    ];
  }
}
