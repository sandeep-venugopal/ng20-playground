import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-avatar-display',
  imports: [],
  templateUrl: './avatar-display.html',
  styleUrl: './avatar-display.scss'
})
export class AvatarDisplay implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() profile: any;
  @Input() appConfig: any;
  @Output() testOutputEmit = new EventEmitter();
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("---Inside AvatarDisplay comp#ngOnChanges ---");
    // Important: Check if the reference actually changed
    console.log(changes);
    if (changes['profile']) {
      console.log('Current Profile Value:', changes['profile'].currentValue);
    } else {
       console.warn('profile object reference did NOT change.');
    }

    if (changes['appConfig']) {
      console.log(JSON.stringify(changes['appConfig'].currentValue, null, 2));      
    } else {
       console.warn('appConfig object reference did NOT change.');
    }
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
    this.profile.name = "Lords";
    this.testOutputEmit.emit();
  }

}
