import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroesLimit : number = 5;
	heroes: Hero[] = [];
  	constructor(private heroService: HeroService) { }

	  ngOnInit() {
	  	this.getHeroes();
	  }

	  getHeroes() : void{
	  	this.heroService.getHeroes()
	  		.subscribe(heroes => this.heroes = heroes.slice(1,this.heroesLimit));
	  }

}
