import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
// import { POKEMONS } from '../models/pokedata/mock-pokemon';
// import { Pokemon } from '../models/pokedata/pokemon';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError,map,tap,filter } from 'rxjs/operators';
import { Characters } from '../models/characters';
import { Result } from '../models/result';


@Injectable({
  providedIn: 'root'

})
export class PokemonService {
  
  private pokeUrl = 'https://rickandmortyapi.com/api/character';
  
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  //GET ALL POKEMONS
  getPokemons(){
    return this.http.get<Characters>(this.pokeUrl)
      .pipe(
        map(resp => {
          return resp.results.map( result => Result.resultJson(result))
        }),
        tap(_=> this.log('fetched characters')),
        catchError(this.handleError<Characters>('Get Characters'))
      )
  }  
  
  //GET ONE POKEMON SPECIFIED BY ID 
  getPokemon(id: number){
    
    const url = `${this.pokeUrl}/${id}`
    return this.http.get(url)
      .pipe(
        tap(_=> this.log('fetched characters')),
        catchError(this.handleError<Characters>(`Get Character: ${id}`))
      )
  }

  private log(message:string) {
    this.messageService.add(`Character Service: ${message}`);
  };

  //IN CASE OF THE API ACCEPT CHANGES 

  //SAVE METHOD 

  //UPDATE METHOD 

  //DELETE METHOD 

}
