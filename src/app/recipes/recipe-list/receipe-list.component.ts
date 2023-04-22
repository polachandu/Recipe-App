import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R-p10o8_9IOGiXUnKXPK2e1K_uzf5TadtQ&usqp=CAU')
  ];
}
