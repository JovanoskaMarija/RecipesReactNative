import React from 'react';
import {Text, View} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Ingredients extends React.Component {
  render() {
    // console.log(this.props.recipe.ingredients);
    // console.log(Array.isArray(this.props.recipe.ingredients));

    // let ingredients = this.props.recipe.ingredients.map(ingredient => {
    //   return (
    //     <View style={Style.row}>
    //        <View style={Style.singleIngredient}>
    //          <Text style={Style.quantity}>
    //            {ingredient.ingredientNumber}
    //          </Text>
    //          <Text style={Style.text}>{ingredient.ingredientText}</Text>
    //        </View>
    //        <Icon name="check-circle" style={Style.icon} />
    //      </View>
    //   );
    // });

    let ingredients = [];
    for (var key in this.props.recipe.ingredients) {
      var obj = this.props.recipe.ingredients[key];
      ingredients.push(
        <View style={Style.row}>
          <View style={Style.singleIngredient}>
            <Text style={Style.quantity}>{obj.ingredientNumber}</Text>
            <Text style={Style.text}>{obj.ingredientText}</Text>
          </View>
          <Icon name="check-circle-o" style={Style.icon} />
        </View>,
      );
    }

    return <View style={Style.cardIngredients}>{ingredients}</View>;
  }
}

export default Ingredients;
