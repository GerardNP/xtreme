import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.switchAnimation, 2000);
  }

  switchAnimation(): void {
    document.querySelector('img').className = "animate__animated animate__fadeOut";
    document.querySelector('p').className = "animate__animated animate__fadeOut";
  }
}
