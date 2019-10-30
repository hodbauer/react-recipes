import { SELECT_RECIPE } from "../actions";

const tempId = 1;

const initialState = {
    recipes: {
        [tempId]: {
            title: 'ובמתכון הראשון',
            ingredients: ['סוכר', 'קמח', 'ביצים', 'משהו עם שם ארוך'],
            preperation: [],
            overall: []
        }
    },
    ids: [tempId],
    selectedId: tempId
}

export default function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_RECIPE:
            return {
                ...state,
                selectedId: action.payload.id
            };
        default:
            return state;
    }
}