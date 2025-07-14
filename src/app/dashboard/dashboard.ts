import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { InfoCard } from "../info-card/info-card";
import { AvatarDisplay } from "../avatar-display/avatar-display";

@Component({
  selector: 'app-dashboard',
  imports: [InfoCard, AvatarDisplay],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() appConfig: any;
  @Output() testOutputEmit = new EventEmitter();

  profile: any = {
    name: 'Sandeep',
    age: 38,
    job: 'SSE'
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside Dashboard comp#ngOnChanges ---");
    if (changes['appConfig']) {
      console.log("P Value: ", changes['appConfig'].previousValue);
      console.log("C Value: ", changes['appConfig'].currentValue);
    }
  }
  ngOnInit(): void {
    console.log("---Inside Dashboard comp#ngOnInit ---");
  }

  ngDoCheck(): void {
    console.log("---Inside Dashboard comp#ngDoCheck ---", this.appConfig);
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

  onBtnClick() {
   this.testOutputEmit.emit();
  }
}
