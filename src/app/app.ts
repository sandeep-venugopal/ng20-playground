import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./dashboard/dashboard";
import { Exchange } from './exchange';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  protected title = 'ng20-playground';
  protected exchangeService = inject(Exchange);

  appConfig = signal({
    angular: {
      version: 20.0,
      cdStrategy: 'Default',
      style: 'scss'
    },
    client: 'Sandeep'
  });

  exchangeRateSignal = signal(90);

  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside App comp#ngOnChanges ---");
  }
  ngOnInit(): void {
    console.log("---Inside App comp#ngOnInit ---");
  }
  ngDoCheck(): void {
    console.log("\n---Inside App comp#ngDoCheck ---");
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

  onBtnClick() {
    console.log(`Inside Dashboard#onBtnClick`);
    console.log("Inside btn Click ---START");
    this.appConfig.update(currentValue => {
      currentValue.client = 'Enrion';
      currentValue.angular.version = 20.1;
      return currentValue;
    });
    console.log(`Fetching rates....`);
    this.exchangeService.getLatestRates().subscribe((response: any) => {
      console.log("\nExchange Rates Response....", response);
      this.exchangeService.updateExchangeRate(response['rates']['INR']);
      console.log('\n');
    });
    console.log("Inside btn Click ---END");
  }
}
