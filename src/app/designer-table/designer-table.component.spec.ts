import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerTableComponent } from './designer-table.component';

describe('DesignerTableComponent', () => {
  let component: DesignerTableComponent;
  let fixture: ComponentFixture<DesignerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
