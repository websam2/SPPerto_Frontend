// File: src/app/secretarias/secretarias.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecretariasComponent } from './secretarias.component';

describe('SecretariasComponent', () => {
  let component: SecretariasComponent;
  let fixture: ComponentFixture<SecretariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind @Input secretarias', () => {
    const testSecretarias = [
      { name: 'Secretaria A', id: 1 },
      { name: 'Secretaria B', id: 2 },
      { name: 'Secretaria C', id: 3 }
    ];
    component.secretarias = testSecretarias;
    fixture.detectChanges();
    
    expect(component.secretarias.length).toBe(3);
    expect(component.secretarias).toEqual(testSecretarias);
  });
});
