import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListDynamicComponent } from './category-list-dynamic.component';

describe('CategoryListDynamicComponent', () => {
  let component: CategoryListDynamicComponent;
  let fixture: ComponentFixture<CategoryListDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
