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
                            {integredient}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Ingredients;


// span.line_wrap {
//     position:relative;
//     display:inline-block;
// }
// span.line {
// display:inline-block;
//     position:absolute;
//     left:0;
//     top:50%;
//     width:0;
//     border-top:1px solid black;
//     transition: width 0.5s ease-in;
// }
// span.line_wrap.active span.line {
//     width:100%;
// }

// <script>
// function test() {
// 	var line = document.getElementById('a');
//   line.classList.toggle('active')
// }
// </script>
// <p>This is <span class='line_wrap' id="a" onclick="test()"><span class='line'></span>weird</span></p>