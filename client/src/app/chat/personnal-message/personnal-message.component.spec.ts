import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalMessageComponent } from './personnal-message.component';

describe('PersonnalMessageComponent', () => {
  let component: PersonnalMessageComponent;
  let fixture: ComponentFixture<PersonnalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
