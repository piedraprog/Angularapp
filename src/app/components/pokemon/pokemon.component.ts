import { Component } from '@angular/core';
import {  POKEMONS } from '../pokedata/mock-pokemon';
import { Pokemon } from '../pokedata/pokemon';

@Component({
  selector: 'app-pokemon', //nombre de la etiqueta que invoca al componente
  templateUrl: './pokemon.component.html', //dirección de la plantilla
  styleUrls: ['./pokemon.component.css']  //dirección de los estilos de la plantilla
})


export class PokemonComponent  {

  listTitle = "Poke List"; //atributo que usa la plantilla al crearse llamandola con doble llave

  // define una propiedad DE COMPONENTE llamada pokemon para hacer manejable el array POKEMONS
  pokemon = POKEMONS;


  selectedPokemon?: Pokemon;
  onSelect(pokemon: Pokemon): void{
    this.selectedPokemon = pokemon;
  }
  
  
  

}
