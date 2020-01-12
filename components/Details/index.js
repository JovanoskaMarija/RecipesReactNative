import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Style from './style';
import RecipeDescription from './Description/index.js';
import Ingredients from './Ingredients/index';
import Steps from './Steps/index';
import Reviews from './Reviews/index';
import Carousel from 'react-native-carousel-control';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      recipe: {},
    };
  }

  componentDidMount() {
    fetch(`http://10.0.2.2:9000/recipes/${this.props.match.params.id}`, {
      method: 'get',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({recipe: data});
      })
      .catch(error => {
        console.log('Error!');
        console.log(error);
      });
  }

  render() {
    let images = this.state.recipe.images;
    let imgArray = [];
    for (var key in images) {
      var obj = images[key];
      imgArray.push(
        <Image source={{uri: obj}} key={obj} style={styles.backgroundImage} />,
      );
    }

    return (
      <View style={Style.detailsRecipe}>
        <View style={styles.container}>
          <View>
            <Carousel pageStyle={{marginLeft: -20, width: 440}}>
              {imgArray}
            </Carousel>
            {/* <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}>
              {imgArray}
            </ScrollView> */}
          </View>
        </View>
        <Text style={Style.detailsTitle}>Description</Text>
        <RecipeDescription
          recipe={this.state.recipe}
          favList={this.props.favList}
          handleFavourites={this.props.handleFavourites}
        />
        <Text style={Style.detailsTitle}>Ingredients</Text>
        <Ingredients recipe={this.state.recipe} />
        <Text style={Style.detailsTitle}>How to make it</Text>
        <Steps recipe={this.state.recipe} />
        <Text style={Style.detailsTitle}>User Reviews</Text>
        <Reviews recipe={this.state.recipe} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginLeft: -20,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  circleDiv: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  whiteCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#999999',
  },
});

export default Details;
