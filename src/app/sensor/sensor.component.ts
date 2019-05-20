import { Component, OnInit } from '@angular/core';
import { Sensors } from '../sensors';
import { MushroomService } from '../mushroom.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.less']
})
export class SensorComponent implements OnInit {

  constructor(
    private mushroomService: MushroomService
  ) { }
  sensors: Sensors[] = [];
  sensorColumns:string[]= ['id', 'code', 'name', 'measuring_object', 'image', 'description'];

  ngOnInit() {
    this.getSensors();
  }

  getSensors() {
    this.mushroomService.getSensors().subscribe(sensors=> {
      this.sensors = sensors;
      console.log(this.sensors);
    })
  }

}
