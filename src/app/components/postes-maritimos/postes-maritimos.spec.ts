import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesMaritimos } from './postes-maritimos';

describe('PostesMaritimos', () => {
  let component: PostesMaritimos;
  let fixture: ComponentFixture<PostesMaritimos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostesMaritimos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostesMaritimos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
