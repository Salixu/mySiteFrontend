import {AfterViewInit, Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  list = ['Full Stack Web Developer', 'Prawie Full Stack Web Developer ;)'];

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }



}
