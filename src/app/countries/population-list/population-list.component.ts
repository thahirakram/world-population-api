import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-population-list',
  templateUrl: './population-list.component.html',
  styleUrls: ['./population-list.component.css']
})
export class PopulationListComponent implements OnInit {


  populationForm = this.fb.group({
    year: ['', Validators.required],
    age: ['', Validators.required]
  });


  populationList = [];

  constructor(private fb: FormBuilder, private populationServ: CountriesService,
    private route: ActivatedRoute) {


  }

  onSubmit() {

    this.populationServ.getPopulation(this.populationForm.value.year, this.populationForm.value.age)
      .subscribe((data: any) => {
        this.populationList = data;
      })

    // var result = await this.populationServ.getCountries()
    //   .subscribe((data: any) => {
    //     this.populationList = data;
    //   })

  }
  ngOnInit() {
  }

}
