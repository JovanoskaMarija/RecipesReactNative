import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Reviews extends React.Component {
  render() {
    let userReviews = [];
    for (var key in this.props.recipe.userReviews) {
      var obj = this.props.recipe.userReviews[key];
      userReviews.push(
        <View style={Style.cardUserReviews}>
          <Text style={Style.reviewTitle}>{obj.title}</Text>
          <View style={Style.userInformation}>
            <Text style={Style.nameAndDate}>
              {obj.userName} | {obj.date}
            </Text>
            <View style={Style.starAndRating}>
              <Icon style={Style.icon} name="star-o" aria-hidden="true"></Icon>
              <Text style={Style.rating}>{obj.userRating}</Text>
            </View>
          </View>
          <View style={Style.description}>
            <Text style={Style.paragraph}>{obj.text}</Text>
            <View style={Style.linkAndIcon}>
              <Text href="#" style={Style.link}>
                See more
              </Text>
              <Icon
                style={Style.icon}
                name="arrow-right"
                aria-hidden="true"></Icon>
            </View>
          </View>
          <View style={Style.horizontalLine}></View>
        </View>,
      );
    }
    return <View style={Style.cardUserReviews}>{userReviews}</View>;
  }
}

export default Reviews;
