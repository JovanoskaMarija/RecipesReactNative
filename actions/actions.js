export const fetchRecipesLoading = () => { 
    return {
        type: "FETCH_RECIPES_LOADING",
    }
}
export const fetchRecipesSuccess = (data) => {
    return {
        type: "FETCH_RECIPES_SUCCESS",
        data:data
    }
}
export const fetchRecipesFail = () => { 
    return {
        type: "FETCH_RECIPES_FAIL",
    }
}

export const fetchRecipes = () => {
    return dispatch => {

      dispatch(fetchRecipesLoading()) ;
      fetch('http://10.0.2.2:9000/recipes', {method: 'get'})
        .then(res => res.json())
        .then(data => {
          dispatch(fetchRecipesSuccess(data)) 
        })
        .catch(() => {
          dispatch(fetchRecipesFail()) 
        })
    };
  };