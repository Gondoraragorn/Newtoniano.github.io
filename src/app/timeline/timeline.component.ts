import { Component, OnInit } from '@angular/core';

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
    this.myScriptElement.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js";
    document.body.appendChild(this.myScriptElement);
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "https://drive.google.com/file/d/1cA0_W83WEBxP3-G3x1rzE_SeNBo-pHqV/view?usp=share_link";
    document.body.appendChild(this.myScriptElement);
   }

  ngOnInit(): void {
  }

}
