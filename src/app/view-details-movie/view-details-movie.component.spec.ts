import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsMovieComponent } from './view-details-movie.component';

describe('ViewDetailsMovieComponent', () => {
  let component: ViewDetailsMovieComponent;
  let fixture: ComponentFixture<ViewDetailsMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailsMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
