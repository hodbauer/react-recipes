import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Recipe from './components/Recipe';
import { getSelectedRecipe } from './store/selectors';

function App({recipe}) {
  return (
    <div className="App">
      <div className="App-header">
        <Recipe recipe={recipe}/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const { recipes } = state;
  const recipe = getSelectedRecipe(recipes);
  return { recipe };
};

export default connect(mapStateToProps)(App);
