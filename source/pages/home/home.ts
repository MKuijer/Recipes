import { Component } from '@angular/core';
import { FoodCategory } from '../../modules/app/app-interfaces';

@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['./home.scss']
})

export class HomePage {
    categories : Array<FoodCategory> = [
        { name : 'Beef', description : 'Delicious recipes with cow meat.' },
        { name : 'Fish', description : 'Fancy recipes from the oceans and rivers.'}
    ];

    constructor() { }
}
