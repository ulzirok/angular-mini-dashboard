import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenu } from './burger-menu';

describe('BurgerMenu', () => {
  let component: BurgerMenu;
  let fixture: ComponentFixture<BurgerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BurgerMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
