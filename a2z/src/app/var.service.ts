import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class VarService {

  countries =[];

  hero: Hero = {id: 2000, name: "Sami Islam"};

  constructor(private _http : HttpClient) { }
  getCountries(){
      return this.countries = ["BD","USA","China"];
  }

  getHero(){
    return this.hero;
  }
 
}