import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHistoriesComponent } from './details-histories.component';

describe('DetailsHistoriesComponent', () => {
  let component: DetailsHistoriesComponent;
  let fixture: ComponentFixture<DetailsHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHistoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
