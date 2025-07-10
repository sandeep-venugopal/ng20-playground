import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AvatarDisplay } from "../avatar-display/avatar-display";

@Component({
  selector: 'app-info-card',
  imports: [AvatarDisplay],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss'
})
export class InfoCard implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() appConfig: any;
  
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
}
