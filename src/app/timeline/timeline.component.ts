import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare function main(): void;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "https://raw.githubusercontent.com/Newtoniano20/newtoniano20.github.io/development/src/assets/script.js";
    document.body.appendChild(this.myScriptElement);
  }
   
  ngOnInit(): void {
    
  }

}
