import { Component, OnInit } from '@angular/core';
import { Characters } from '../../models'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})


export class PokemonDetailComponent implements OnInit {

  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ){}

  ngOnInit(): void{
    this.getPokemon();
  }
  

  getPokemon(): void{

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pokemonService.getPokemon(id)
      .subscribe( resp =>this.pokemon = resp);
    
     
  }

  save(){

  }

  goBack(): void{
    this.location.back();
  }

}