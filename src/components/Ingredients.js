import React from 'react';

class Ingredients extends React.Component {
    selectIngredient = (target) => {
        console.log(target.classList);
        target.classList.toggle('selected');
    }

    render() {
        return (
            <div>
                <span>מצרכים</span>
                <ul>
                    {this.props.integredients.map(integredient => {
                        return <li className="Ingredient-property"
                            onClick={e => this.selectIngredient(e.target)}
                            key={`integredient-${integredient}`}>
                            <span class='line'></span>
                            {integredient}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Ingredients;
