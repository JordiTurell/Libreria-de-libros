import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEditLibroComponent } from './back-edit-libro.component';

describe('BackEditLibroComponent', () => {
  let component: BackEditLibroComponent;
  let fixture: ComponentFixture<BackEditLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackEditLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEditLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
