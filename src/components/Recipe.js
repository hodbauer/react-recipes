import React from 'react';

import Ingredients from './Ingredients';
import Preparation from './Preparation';
import Overall from './Overall';
import Title from './Title';

function Recipe({ recipe }) {
    return (
        <div>
            <Title title={recipe.title} />
            <div className="App-content">
                -
                <Ingredients integredients={recipe.ingredients}/>
                - -
                <Preparation />
                - -
                <Overall />
                -
            </div>
        </div>
    );
}

export default Recipe;