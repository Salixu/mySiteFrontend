import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, AfterViewInit {

  loaded: boolean;
  constructor() { }


  ngOnInit(): void {
    this.loaded = false;
  }

  ngAfterViewInit(): void {
    this.changeState();
  }

  changeState(): void{
    setTimeout( () => {
      this.loaded = true;
    }, 10);
  }
}
