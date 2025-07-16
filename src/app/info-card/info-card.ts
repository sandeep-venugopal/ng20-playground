import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, inject, input, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { AvatarDisplay } from "../avatar-display/avatar-display";
import { Exchange } from '../exchange';

@Component({
  selector: 'app-info-card',
  imports: [AvatarDisplay],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCard implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  appConfig = input.required<any>();
  profile = input.required<any>();
  @Output() testEvent = new EventEmitter();

  protected exchangeService = inject(Exchange);
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside InfoCard comp#ngOnChanges ---");
  }
  ngOnInit(): void {
    console.log("---Inside InfoCard comp#ngOnInit ---");
  }
  ngDoCheck(): void {
    console.log("---Inside InfoCard comp#ngDoCheck ---");
  }
  ngAfterContentInit(): void {
    console.log("---Inside InfoCard comp#ngAfterContentInit ---");
  }
  ngAfterContentChecked(): void {
    console.log("---Inside InfoCard comp#ngAfterContentChecked ---");
  }
  ngAfterViewInit(): void {
    console.log("---Inside InfoCard comp#ngAfterViewInit ---");
  }
  ngAfterViewChecked(): void {
    console.log("---Inside InfoCard comp#ngAfterViewChecked ---");
  }

  onBtnClick() {
    console.log(`Inside InfoCard#onBtnClick`);
    this.testEvent.emit();
  }
}
