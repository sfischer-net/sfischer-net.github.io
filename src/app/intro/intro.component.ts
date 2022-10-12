import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'; 

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
