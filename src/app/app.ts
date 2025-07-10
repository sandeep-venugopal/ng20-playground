import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  protected title = 'ng20-playground';

  appConfig: any = {
    angular: {
      version: 20.0,
      cdStrategy: 'Default',
      style: 'scss'
    },
    client: 'Sandeep'
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside App comp#ngOnChanges ---");
  }
  ngOnInit(): void {
    console.log("---Inside App comp#ngOnInit ---");
  }
  ngDoCheck(): void {
    console.log("---Inside App comp#ngDoCheck ---");
  }
  ngAfterContentInit(): void {
    console.log("---Inside App comp#ngAfterContentInit ---");
  }
  ngAfterContentChecked(): void {
    console.log("---Inside App comp#ngAfterContentChecked ---");
  }
  ngAfterViewInit(): void {
    console.log("---Inside App comp#ngAfterViewInit ---");
  }
  ngAfterViewChecked(): void {
    console.log("---Inside App comp#ngAfterViewChecked ---");
  }
}
