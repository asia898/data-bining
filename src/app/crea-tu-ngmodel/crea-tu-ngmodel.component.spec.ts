import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaTuNgmodelComponent } from './crea-tu-ngmodel.component';

describe('CreaTuNgmodelComponent', () => {
  let component: CreaTuNgmodelComponent;
  let fixture: ComponentFixture<CreaTuNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaTuNgmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaTuNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
