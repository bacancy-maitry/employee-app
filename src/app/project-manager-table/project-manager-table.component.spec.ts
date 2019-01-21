import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerTableComponent } from './project-manager-table.component';

describe('ProjectManagerTableComponent', () => {
  let component: ProjectManagerTableComponent;
  let fixture: ComponentFixture<ProjectManagerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
