import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRedirectionComponent } from './button-redirection.component';

describe('ButtonRedirectionComponent', () => {
  let component: ButtonRedirectionComponent;
  let fixture: ComponentFixture<ButtonRedirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRedirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
