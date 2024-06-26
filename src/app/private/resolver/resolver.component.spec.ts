import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverComponent } from './resolver.component';

describe('ResolverComponent', () => {
  let component: ResolverComponent;
  let fixture: ComponentFixture<ResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
