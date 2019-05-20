import { Component, OnInit } from '@angular/core';
import { MushroomService } from '../mushroom.service';
import { Mushroom } from '../mushroom';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private mushroomService: MushroomService) { 
  }

  mushrooms: Mushroom[] = [];

  mushroomColumns:string[]= ['id', 'name', 'family', 'humidity', 'image'];
  
  ngOnInit() {
    this.getMushroom();
  }

  getMushroom() {
   this.mushroomService.getMushroom().subscribe(mushrooms => {
      this.mushrooms = mushrooms;
      console.log(this.mushrooms);
    });
  }
}

