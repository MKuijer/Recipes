import { Component } from '@angular/core';
import { FoodCategory } from '../../modules/app/app-interfaces';

@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomePage {
    categories : Array<FoodCategory> = [
        { name : 'Beef',       description    : 'Delicious recipes with cow meat',                   image : 'images/beef/beef_4.jpg' },
        { name : 'Pork',       description    : 'Finger licking recipes with pork',                  image : 'images/pork/pork_4.jpg'},
        { name : 'Chicken',    description    : 'You better do not chicken out on these recipes',    image : 'images/chicken/chicken_5.jpg'},
        { name : 'Game',       description    : 'I know you were hunting on this kinda meat',        image : 'images/game/game_1.jpg'},
        { name : 'Fish',       description    : 'Fancy recipes from the oceans and rivers',          image : 'images/fish/fish_2.jpg'},
        { name : 'Veggie',     description    : 'For the green ones amongst us',                     image : 'images/veggie/veggie_4.jpg'},
        { name : 'Cheese',     description    : 'Very cheezy recipes',                               image: 'images/cheese/cheese_2.jpg'},
        { name : 'Marinades',  description    : 'Just awesome, do not need to say more',             image: 'images/marinades/marinades_1.jpg'},
        { name : 'Desserts',   description    : 'I scream for an icecream',                          image: 'images/desserts/desserts_3.jpg'},
        { name : 'Sandwiches', description    : 'All kinds of creative and super jummy sandwiches',  image: 'images/sandwiches/sandwiches_1.jpg'},
        { name : 'Drinks',     description    : 'You have to have something to flush away your meal', image: 'images/drinks/drinks_1.jpg'},
        { name : 'Sweets',     description    : 'For the sweetypants who wants some candy',          image: 'images/sweets/sweets_3.jpg'}
    ];

    constructor() { }
}
