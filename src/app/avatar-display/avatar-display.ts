import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, EventEmitter, inject, input, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Exchange } from '../exchange';


@Component({
  selector: 'app-avatar-display',
  imports: [],
  templateUrl: './avatar-display.html',
  styleUrl: './avatar-display.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarDisplay implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Output() testEvent = new EventEmitter();
  profile = input.required<any>();
  protected exchangeService = inject(Exchange);
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside AvatarDisplay comp#ngOnChanges ---");
  }
  ngOnInit(): void {
    console.log("---Inside AvatarDisplay comp#ngOnInit ---");
  }
  ngDoCheck(): void {
    console.log("---Inside AvatarDisplay comp#ngDoCheck ---");
  }
  ngAfterContentInit(): void {
    console.log("---Inside AvatarDisplay comp#ngAfterContentInit ---");
  }
  ngAfterContentChecked(): void {
    console.log("---Inside AvatarDisplay comp#ngAfterContentChecked ---");
  }
  ngAfterViewInit(): void {
    console.log("---Inside AvatarDisplay comp#ngAfterViewInit ---");
  }
  ngAfterViewChecked(): void {
    console.log("---Inside AvatarDisplay comp#ngAfterViewChecked ---");
  }

  onBtnClick() {
    console.log(`Inside AvatarDisplay#onBtnClick`);
    this.testEvent.emit();
  }

}
