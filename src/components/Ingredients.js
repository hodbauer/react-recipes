import React from 'react';
import './Ingredients.css';

class Ingredients extends React.Component {
    selectIngredient = (target) => {
        target.parentElement.classList.toggle('selected');
    }

    render() {
        return (
            <div>
                <span>מצרכים</span>
                <div className="Integredients-container">
                    {this.props.integredients.map(integredient => {
                        return <span className="Ingredient-property"
                            onClick={e => this.selectIngredient(e.target)}
                            key={`integredient-${integredient}`}>
                            <span className="Integredient-bullet" role="img" aria-label="bullet">🧂</span>
                            <span className="strikethrough">{integredient}</span>
                        </span>
                    })}
                </div>
            </div>
        )
    }
}

export default Ingredients;


// TODO:
// 1. fix translateX it shouldn't be 1000%
// 2. start strikethrough from text and not from bullet
// 3. reverse animation
// 4. test flex
