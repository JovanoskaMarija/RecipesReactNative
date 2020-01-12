import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
  return (
    <View style={Style.header}>
      <View style={Style.column}>
        <Link to="/" component={TouchableOpacity}>
          <View>
            <Icon name="bars" style={Style.icon} />
          </View>
        </Link>
        <Link to="/" component={TouchableOpacity}>
          <View>
          <Text style={Style.logo}>Crunch Hub</Text>
          </View>
        </Link>
      </View>
      <View style={Style.column}>
          <View >
            <Icon name="search" style={Style.icon} onPress={() => props.handleShowSearch() } />
          </View>
        <View>
            <Text style={Style.line}>|</Text>
          </View>
        <Link to="/favourites" component={TouchableOpacity}>
          <View>
            <Icon name="user" style={Style.icon} />
          </View>
        </Link>
      </View>
    </View>
  );
};
export default Header;
