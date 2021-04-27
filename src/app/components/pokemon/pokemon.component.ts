import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokedata/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import {MessageService} from '../../services/message.service'


@Component({
  selector: 'app-pokemon', //nombre de la etiqueta que invoca al componente
  templateUrl: './pokemon.component.html', //dirección de la plantilla
  styleUrls: ['./pokemon.component.css']  //dirección de los estilos de la plantilla
})


export class PokemonComponent implements OnInit {

  listTitle = "Poke List"; //atributo que usa la plantilla al crearse llamandola con doble llave

  // define una propiedad DE COMPONENTE llamada pokemon para hacer manejable el array POKEMONS
  pokemon: Pokemon[];

  constructor(private PokemonService: PokemonService, private messageService:MessageService){}
    
  ngOnInit():void{
    this.getPokemons();
  }
  
  getPokemons(): void{
     this.PokemonService.getPokemons()
        .subscribe(pokemons => this.pokemon = pokemons)
  }

  
}
