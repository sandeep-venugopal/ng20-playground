import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  appConfig = input.required<any>();
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside App comp#ngOnChanges ---");
  }
  ngOnInit(): void {
    console.log("---Inside Card comp#ngOnInit ---");
  }
  ngDoCheck(): void {
    console.log("\n---Inside Card comp#ngDoCheck ---");
  }
  ngAfterContentInit(): void {
    console.log("---Inside Card comp#ngAfterContentInit ---");
  }
  ngAfterContentChecked(): void {
    console.log("---Inside Card comp#ngAfterContentChecked ---");
  }
  ngAfterViewInit(): void {
    console.log("---Inside Card comp#ngAfterViewInit ---");
  }
  ngAfterViewChecked(): void {
    console.log("---Inside Card comp#ngAfterViewChecked ---");
  }
}
