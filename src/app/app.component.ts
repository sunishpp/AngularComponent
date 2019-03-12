import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activeuser',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public activeUsers :any;
  public title :any;
  @Input() user: string;
    
  
  ngOnInit() { 
    this.activeUsers = [
          {"name" :"Anil Singh"},
          {"name" :"Alok Singh"},
          {"name" :"Dilip Singh"},
          {"name" :"Sunil Singh"},
          {"name" :"Aradhya Singh"},
          {"name" :"Reena Singh"}
    ];
  }
}
