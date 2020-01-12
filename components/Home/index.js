import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RecipeList from '../RecipeList';
import CarouselCards from '../CarouselCards/index';

const Home = props => {
  return (
    <View>
      <Text style={styles.title}>Weekly Top Picks</Text>
      <CarouselCards
        recipes={props.recs}
        favList={props.favList}
        handleFavourites={props.handleFavourites}
      />
      <Text style={styles.title}>Our Recipes</Text>
      <RecipeList
        recipes={props.recipes}
        favList={props.favList}
        handleFavourites={props.handleFavourites}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: '#999999',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Home;
