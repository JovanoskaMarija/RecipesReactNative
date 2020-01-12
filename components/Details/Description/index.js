import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class RecipeDescription extends React.Component {
  onHandleFavourites = () => {
      this.props.handleFavourites(this.props.recipe.id)
  }

  render() {
    return (
      <View style={Style.cardDescription}>
        <Text style={Style.recipeTitle}>{this.props.recipe.name}</Text>
        <Text style={Style.recipeDescription}>
          {this.props.recipe.shortDesc}
        </Text>
        <View style={Style.horizontalLine}></View>
        <View style={Style.information}>
          <View style={Style.reviewers}>
            <View style={Style.leftColumn}>
              <Icon
                name="star-o"
                style={Style.icon}
              />
              <Text style={Style.rating}>{this.props.recipe.stars}</Text>
              <View style={Style.verticalLine}></View>
              <Text style={Style.reviews}>
                {this.props.recipe.reviews} reviews
              </Text>
            </View>
            <Icon
              name="bookmark-o"
              style={Style.recipeBookmarkIcon}
              // onPress={()=> console.log("Description fav icon")}
              onPress={()=> this.onHandleFavourites(this.props.recipe.id)}
              
            />
          </View>
          <View style={Style.prepTimeRow}>
            <Icon name="clock-o" style={Style.icon}></Icon>
            <Text style={Style.prepTime}>
              {this.props.recipe.totalPrepTime}
            </Text>
          </View>
          <View style={Style.stepsRow}>
            <Icon name="circle-o" style={Style.icon}></Icon>
            <Text style={Style.steps}>
              Steps: {this.props.recipe.totalSteps}
            </Text>
          </View>
          <View style={Style.ingredientsRow}>
            <Icon name="spoon" aria-hidden="true" style={Style.icon}></Icon>
            <Text style={Style.ingredients}>Ingredients: 6</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default RecipeDescription;
