import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InfoCard } from "../info-card/info-card";
import { AvatarDisplay } from "../avatar-display/avatar-display";

@Component({
  selector: 'app-dashboard',
  imports: [InfoCard, AvatarDisplay],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() appConfig: any;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside Dashboard comp#ngOnChanges ---");
  }
  ngOnInit(): void {
    console.log("---Inside Dashboard comp#ngOnInit ---");
  }
  ngDoCheck(): void {
    console.log("---Inside Dashboard comp#ngDoCheck ---");
  }
  ngAfterContentInit(): void {
    console.log("---Inside Dashboard comp#ngAfterContentInit ---");
  }
  ngAfterContentChecked(): void {
    console.log("---Inside Dashboard comp#ngAfterContentChecked ---");
  }
  ngAfterViewInit(): void {
    console.log("---Inside Dashboard comp#ngAfterViewInit ---");
  }
  ngAfterViewChecked(): void {
    console.log("---Inside Dashboard comp#ngAfterViewChecked ---");
  }
}
