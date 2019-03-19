import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { PopulationListComponent } from './population-list/population-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountryListComponent, PopulationListComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
