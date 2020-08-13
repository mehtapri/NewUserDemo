import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrregapiComponent } from './usrregapi.component';

describe('UsrregapiComponent', () => {
  let component: UsrregapiComponent;
  let fixture: ComponentFixture<UsrregapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrregapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrregapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
