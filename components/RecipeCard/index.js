import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from 'react-router-native';

class RecipeCard extends React.Component {

  onHandleFavourites = () => {
    this.props.handleFavourites(this.props.recipe.id)
}
  render() {
    return (
      <Link to={`recipe/${this.props.recipe.id}`}>
        <View style={Style.recipeCard}>
          <Image
            style={Style.cardImage}
            source={{uri: this.props.recipe.imageUrl}}
          />
          <View style={Style.recipeInformation}>
            <Text style={Style.recipeTitle}>{this.props.recipe.name}</Text>
            <Text
              style={[
                Style.shortDesc,
                {display: this.props.shortDesc ? 'flex' : 'none'},
              ]}>
              {this.props.recipe.shortDesc}
            </Text>

            <View style={Style.horizontalLine}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={Style.recipeRating}>
                <Icon name="star-o" style={Style.icon} />
                <Text style={Style.rating}>{this.props.recipe.stars}</Text>
                <View style={Style.verticalLine}></View>
                <Text style={Style.reviews}>
                  {this.props.recipe.reviews} reviews
                </Text>
              </View>
              <Icon
                name="bookmark-o"
                style={[
                  Style.saveIcon,
                  {display: this.props.bookmarkIcon ? 'flex' : 'none'},
                ]}
                onPress={() => this.onHandleFavourites(this.props.recipe.id)}
                // onPress={() => console.log("VO CARD SI")}
              />
            </View>
          </View>
        </View>
      </Link>
    );
  }
}

export default RecipeCard;
