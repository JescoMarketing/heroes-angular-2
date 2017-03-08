import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html'
})
export class NavSearchComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino'])
    });
  }

}
