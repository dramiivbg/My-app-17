import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApodComponent } from './list-apod.component';

describe('ListApodComponent', () => {
  let component: ListApodComponent;
  let fixture: ComponentFixture<ListApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListApodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
