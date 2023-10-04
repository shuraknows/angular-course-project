import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Borscht',
      'Legendary tasty soup that have magic effect.',
      'https://static.vecteezy.com/system/resources/previews/000/729/572/large_2x/borsh-russian-traditional-dish-photo.jpg'
    ),
    new Recipe(
      'Borscht',
      'Legendary tasty soup that have magic effect.',
      'https://static.vecteezy.com/system/resources/previews/000/729/572/large_2x/borsh-russian-traditional-dish-photo.jpg'
    ),
    new Recipe(
      'Borscht',
      'Legendary tasty soup that have magic effect.',
      'https://static.vecteezy.com/system/resources/previews/000/729/572/large_2x/borsh-russian-traditional-dish-photo.jpg'
    ),
  ];

  constructor() {

  }

  ngOnInit() {}
}
