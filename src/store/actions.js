export const SELECT_RECIPE = 'SELECT_RECIPE';

export const selectRecipe = id => ({
    type: SELECT_RECIPE,
    payload: { id }
});
