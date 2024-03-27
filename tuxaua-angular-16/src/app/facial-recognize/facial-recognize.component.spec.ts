import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialRecognizeComponent } from './facial-recognize.component';

describe('FacialRecognizeComponent', () => {
  let component: FacialRecognizeComponent;
  let fixture: ComponentFixture<FacialRecognizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacialRecognizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacialRecognizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
