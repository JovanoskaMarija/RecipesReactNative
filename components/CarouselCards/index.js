import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import RecipeCard from '../RecipeCard';

const CarouselCards = props => {
  let cards = props.recipes.map(recipe => {
    return (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        bookmarkIcon={true}
        shortDesc={true}
        favList={props.favList}
        handleFavourites={props.handleFavourites}
      />
    );
  });
  return (
    <View>
      <ScrollView
        style={{display: 'flex', flex: 2}}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {cards}
      </ScrollView>
    </View>
  );
};

export default CarouselCards;
