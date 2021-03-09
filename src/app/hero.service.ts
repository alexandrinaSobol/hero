import { Injectable } from "@angular/core";
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const x = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return x;
  }
}
