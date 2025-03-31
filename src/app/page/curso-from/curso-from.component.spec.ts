import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoFromComponent } from './curso-from.component';

describe('CursoFromComponent', () => {
  let component: CursoFromComponent;
  let fixture: ComponentFixture<CursoFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
