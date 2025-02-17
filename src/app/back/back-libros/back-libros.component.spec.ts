import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLibrosComponent } from './back-libros.component';

describe('BackLibrosComponent', () => {
  let component: BackLibrosComponent;
  let fixture: ComponentFixture<BackLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
