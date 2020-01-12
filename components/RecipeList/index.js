import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import RecipeCard from '../RecipeCard/index';

const RecipeList = props => {
  let list = props.recipes.map((recipe, id) => {
    return (
      <View>
        <RecipeCard
          key={id}
          recipe={recipe}
          bookmarkIcon={false}
          shortDesc={false}
          favList={props.favList}
          handleFavourites={props.handleFavourites}
        />
      </View>
    );
  });
  return <View>{list}</View>;
};

export default RecipeList;
