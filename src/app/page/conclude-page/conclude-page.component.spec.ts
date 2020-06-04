import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludePageComponent } from './conclude-page.component';

describe('ConcludePageComponent', () => {
  let component: ConcludePageComponent;
  let fixture: ComponentFixture<ConcludePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcludePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcludePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
