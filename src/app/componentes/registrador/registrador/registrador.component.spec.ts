import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorComponent } from './registrador.component';

describe('RegistradorComponent', () => {
  let component: RegistradorComponent;
  let fixture: ComponentFixture<RegistradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
