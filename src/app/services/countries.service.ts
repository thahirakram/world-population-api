import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }


  getCountries() {
    const url = `http://api.population.io:80/1.0/countries`;
    return this.http.get(url);
  }

  getPopulation(year, age) {
    const url = `http://api.population.io:80/1.0/population/${year}/aged/${age}`;
    return this.http.get(url);
  }

  getpopbyYearCountryAge(year, age, country) {
    const url = `http://api.population.io:80/1.0/population/${year}/${country}/${age}/`;
    return this.http.get(url);
  }
}
