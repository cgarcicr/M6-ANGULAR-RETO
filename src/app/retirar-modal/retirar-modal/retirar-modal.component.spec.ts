import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarModalComponent } from './retirar-modal.component';

describe('RetirarModalComponent', () => {
  let component: RetirarModalComponent;
  let fixture: ComponentFixture<RetirarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetirarModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetirarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
