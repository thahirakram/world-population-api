import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationListComponent } from './population-list.component';

describe('PopulationListComponent', () => {
  let component: PopulationListComponent;
  let fixture: ComponentFixture<PopulationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
