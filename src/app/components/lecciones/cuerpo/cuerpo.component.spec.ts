import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoComponent } from './cuerpo.component';

describe('CuerpoComponent', () => {
  let component: CuerpoComponent;
  let fixture: ComponentFixture<CuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
