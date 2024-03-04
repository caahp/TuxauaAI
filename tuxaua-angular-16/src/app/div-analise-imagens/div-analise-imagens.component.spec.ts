import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivAnaliseImagensComponent } from './div-analise-imagens.component';

describe('DivAnaliseImagensComponent', () => {
  let component: DivAnaliseImagensComponent;
  let fixture: ComponentFixture<DivAnaliseImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivAnaliseImagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivAnaliseImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
