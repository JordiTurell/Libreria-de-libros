import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCategoriasComponent } from './back-categorias.component';

describe('BackCategoriasComponent', () => {
  let component: BackCategoriasComponent;
  let fixture: ComponentFixture<BackCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackCategoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
