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
  profile: any = {
    name: 'Sandeep',
    age: 38,
    job: 'SSE'
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside Dashboard comp#ngOnChanges ---", changes);
  }
  ngOnInit(): void {
    console.log("---Inside Dashboard comp#ngOnInit ---");
    setTimeout(() => {
      // this.appConfig.angular.cdStrategy = 'OnPush';
      // this.appConfig.client = "PostgresSql";
      this.profile = {
        name: 'Sandeep',
        age: 38,
        job: 'SSE'
      }
    }, 5000);
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
