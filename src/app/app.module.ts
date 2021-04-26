import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// COMPONENTS 
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { MessageserviceComponent } from './components/messageservice/messageservice.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailComponent,
    MessageserviceComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
