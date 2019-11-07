const initialState = { word: ""};

export default (state = initialState, action) => {
    if(action.type === 'UPDATE_WORD'){
        return{
            ... state,
            word: action.payload
        }
    }

    return state;
};

export const selectActiveWord = state => state.wordReducer.word;