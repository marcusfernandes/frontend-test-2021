import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBodyComponent } from './menu-body.component';

describe('MenuBodyComponent', () => {
  let component: MenuBodyComponent;
  let fixture: ComponentFixture<MenuBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
