// File: src/app/spperto/spperto.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SppertoComponent } from './spperto.component';
import * as moment from 'moment-timezone';

describe('SppertoComponent', () => {
  let component: SppertoComponent;
  let fixture: ComponentFixture<SppertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SppertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateDateTime on ngOnInit', () => {
    spyOn(component, 'updateDateTime');
    component.ngOnInit();
    expect(component.updateDateTime).toHaveBeenCalled();
  });

  it('should update currentDateTime correctly', () => {
    const mockDate = '2023-07-01T12:00:00Z';
    spyOn(moment.prototype, 'tz').and.returnValue(moment(mockDate));
    spyOn(moment.prototype, 'format').and.returnValue('01/07/2023 09:00:00');
    
    component.updateDateTime();
    expect(component.currentDateTime).toBe('01/07/2023 09:00:00');
  });

  it('should update currentDateTime every second', fakeAsync(() => {
    const mockDate = '2023-07-01T12:00:00Z';
    spyOn(moment.prototype, 'tz').and.returnValue(moment(mockDate));
    spyOn(moment.prototype, 'format').and.returnValue('01/07/2023 09:00:00');
    
    component.ngOnInit();
    tick(1000);
    expect(component.currentDateTime).toBe('01/07/2023 09:00:00');
    tick(1000);
    expect(component.currentDateTime).toBe('01/07/2023 09:00:00');
    
    component.ngOnDestroy(); // Ensure the interval is cleared
  }));
});

