import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../../../../models/recipe";
import { RecipesService } from "../../../../services/recipes.service";
import { Observable } from "rxjs/Observable"


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  async ngOnInit() {
   let id= this.activatedRoute.snapshot.params.id;  
   this.recipe = await this.recipesService.get(id);
   
  }

}
