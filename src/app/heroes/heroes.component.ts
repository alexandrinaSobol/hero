import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../hero.service";
import { HEROES } from "../mock-heroes";
import { Hero } from '../hero';

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
 
  constructor(private heroService: HeroService) {}
   selectedHero: Hero;

  heroes: Hero[] = [];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
 this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  ngOnInit() {
    this.getHeroes();
  }
}
