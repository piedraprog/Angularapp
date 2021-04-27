import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {PokemonComponent} from './components/pokemon/pokemon.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


const routes: Routes =[

  {path : '', redirectTo:'./dashboard', pathMatch:'full'},
  {path : 'pokemons', component: PokemonComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'detail/:id', component: PokemonDetailComponent },
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
