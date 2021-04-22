import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// COMPONENTS 
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
