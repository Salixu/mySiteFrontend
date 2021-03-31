import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  isReady: boolean;
  title = 'Bartosz Glanowski';


  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
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

