const initData = {// initial state=[] 
    recipes: [],
    loading: false,
    fail: false,
}


export const recipesReducer = (state = initData, action) => {
    switch(action.type){
        
        case 'FETCH_RECIPES_SUCCESS':
            return {
                ...state, 
                recipes: action.data,
                loading: false,
                fail: false
            }
        case 'FETCH_RECIPES_LOADING':
            return{
                ...state,
                loading: true,
                fail: false,
            }
        case 'FETCH_RECIPES_FAIL':
            return{
                ...state,
                loading: false,
                fail: true
            }
    }

    return state;
}
