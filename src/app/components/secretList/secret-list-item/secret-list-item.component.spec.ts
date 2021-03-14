import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretListItemComponent } from './secret-list-item.component';

describe('SecretListItmeComponent', () => {
  let component: SecretListItemComponent;
  let fixture: ComponentFixture<SecretListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
