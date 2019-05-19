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

  mushroom: Mushroom[] = [];
  ngOnInit() {
    this.getMushroom();
  }
  displayedColumns:string[]= ['id', 'name', 'family', 'humidity', 'image'];


  getMushroom() {
   this.mushroomService.getMushroom().subscribe(mushroom => {
      this.mushroom = mushroom;
      console.log(this.mushroom);
    });
  }
}

