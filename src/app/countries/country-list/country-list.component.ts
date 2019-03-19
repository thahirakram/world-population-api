import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryList = [];
  constructor(private countryServ:  CountriesService) { 

    this.countryServ.getCountries()
    .subscribe((data: any) => {
      this.countryList = data.countries;
    });
  } 

  ngOnInit() {
  }

}
