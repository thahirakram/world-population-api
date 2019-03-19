import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { PopulationListComponent } from './population-list/population-list.component';

const routes: Routes = [
  {
    path: '',
    component: CountryListComponent
  },
  {
    path: 'populationlist',
    component: PopulationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
