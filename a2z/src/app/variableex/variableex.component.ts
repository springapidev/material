import { Component, OnInit } from '@angular/core';
import { VarService } from '../var.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-variableex',
  templateUrl: './variableex.component.html',
  styleUrls: ['./variableex.component.scss']
})
export class VariableexComponent implements OnInit {
id: number;
name: string;

names =[];
countries = [];



hero: Hero = {id:1000,name:'Rajaul Islam'};


  constructor(private _varService : VarService) { }

  ngOnInit() {
    this.id=100;
    this.name="Md Rajaul Islam";
    this.names = ["Sami","Sejuti","Sayonti"];
    this.countries = this._varService.getCountries();

    }

}
