import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  isReady: boolean;
  title = 'mySiteFrontend';


  constructor() {
  }
  ngOnInit(): void {
    this.isReady = false;
  }

  ngAfterViewInit(): void {
    this.changeState();
  }

  changeState(): void{
    setTimeout( () => {
      this.isReady = true;
    }, 2000);
  }
}

