import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMoviesComponent } from './card-movies.component';

describe('CardMoviesComponent', () => {
  let component: CardMoviesComponent;
  let fixture: ComponentFixture<CardMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
