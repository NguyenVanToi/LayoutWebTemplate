import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('openList', [
      state('up', style({
        'height': '0px',
        'overflow-y': 'hidden',
      })),
      state('down', style({
        'min-height': '120px',
      })),
      transition('up => down', animate('300ms')), 
      transition('down => up', animate('300ms')), 
    ])
  ]
})
export class AppComponent {
  title = 'angular-layout';


  menuState:string = 'up';
  menuState3:string = 'up';
  menuState4:string = 'up';
  menuState5:string = 'up';
  menuState6:string = 'up';
  ngOnInit() {
  }

  activeDropdown(numMenu : string) 
  {
    switch (numMenu)
    {
      case '1':
        this.menuState = this.menuState === 'down' ? 'up' : 'down';
        break;
      case '3':
        this.menuState3 = this.menuState3 === 'down' ? 'up': 'down';
        break;
      case '4':
        this.menuState4 = this.menuState4 === 'down' ? 'up': 'down';
        break;
      case '5':
        this.menuState5 = this.menuState5 === 'down' ? 'up': 'down';
        break;
      case '6':
        this.menuState6 = this.menuState6 === 'down' ? 'up': 'down';
        break;
    }
  }
}
