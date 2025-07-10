import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-avatar-display',
  imports: [],
  templateUrl: './avatar-display.html',
  styleUrl: './avatar-display.scss'
})
export class AvatarDisplay implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

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
}
