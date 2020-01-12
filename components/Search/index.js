import React from 'react';
import {View, Text, TextInput, Modal, TouchableHighlight} from 'react-native';
import Style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Filters from '../Filters/index'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
    };
  }
  onHandleFilterName = searchName => {
    this.props.handleFilterName(searchName);
  };

  // onHandleFilterRating = searchRating => {
  //   // console.log("searchRating in search", searchRating)
  //   // console.log("type of searchRating in search", typeof searchRating)
  //   this.props.handleFilterRating(searchRating);
  // };

  changeModalVisibility = bool => {
    this.setState({isModalVisible: bool});
  };
  render() {
    return (
      <View>
        <View style={Style.container}>
          <TextInput
            style={Style.input}
            onChangeText={searchName => this.props.handleFilterName(searchName)}
            value={this.props.filterName}
            placeholder="Search for recipe..."
          />
          <View>
            <Icon
              name="search"
              style={Style.icon}
              onPress={() => this.props.handleShowSearch()}
            />
          </View>
          <View>
            <Text style={Style.line}>|</Text>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => this.changeModalVisibility(true)}>
              <Icon name="filter" style={Style.icon} />
            </TouchableHighlight>
            <Modal visible={this.state.isModalVisible} onRequestClose={()=>this.changeModalVisibility(false)}>
              <Filters changeModalVisibility={this.changeModalVisibility} />
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}

export default Search;
