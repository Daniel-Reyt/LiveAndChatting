import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnalMessageComponent } from './list-personnal-message.component';

describe('ListPersonnalMessageComponent', () => {
  let component: ListPersonnalMessageComponent;
  let fixture: ComponentFixture<ListPersonnalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonnalMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonnalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
