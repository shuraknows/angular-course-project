import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'Borscht',
      'Legendary tasty soup that have magic effect.',
      'https://static.vecteezy.com/system/resources/previews/000/729/572/large_2x/borsh-russian-traditional-dish-photo.jpg'
    ),
    new Recipe(
      'Borscht 2',
      'Legendary tasty soup that have magic effect. 2',
      'https://static.vecteezy.com/system/resources/previews/000/729/572/large_2x/borsh-russian-traditional-dish-photo.jpg'
    ),
    new Recipe(
      'Borscht 3',
      'Legendary tasty soup that have magic effect. 3',
      'https://static.vecteezy.com/system/resources/previews/000/729/572/large_2x/borsh-russian-traditional-dish-photo.jpg'
    ),
  ];

  constructor() {

  }

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
