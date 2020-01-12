import React from 'react';
import {Text, View} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Steps extends React.Component {
  render() {
    let steps = [];
    for (var key in this.props.recipe.steps) {
      var obj = this.props.recipe.steps[key];
      steps.push(
        <View>
          <Text style={Style.title}>Step {obj.number}</Text>
          <Text style={Style.description}>{obj.text}</Text>
        </View>,
      );
    }
    return <View style={Style.cardSteps}>{steps}</View>;
  }
}

export default Steps;
