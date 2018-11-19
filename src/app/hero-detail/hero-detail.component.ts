import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;
	
  constructor(
  	private route: ActivatedRoute,
	  private heroService: HeroService,
	  private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

	getHero() {
	 	const id = null;
	 	this.route.params.subscribe((params: Params) => {
    	let id = params['id'];
    	console.log(id);
    	this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  	});
	}
	
	goBack(): void {
	  this.location.back();
	}
}
