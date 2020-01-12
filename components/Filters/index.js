import React from 'react';
import {
  View,
  Text,
  Picker,
  Button,
  TouchableOpacity,
} from 'react-native';
import StyleFilters from './style';

class Filters extends React.Component {
  closeModal = () => {
    this.props.changeModalVisibility(false)
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={1} disabled={true}>
        <View>
          <View style={StyleFilters.filters}>
            <Text style={StyleFilters.title}>Rating</Text>
            <View style={StyleFilters.dropdown}>
              <Picker style={StyleFilters.selectDropdown}>
                <Picker.Item
                  label="1 star"
                  value="one"
                  style={StyleFilters.pickerItem}
                />
                <Picker.Item label="2 stars" value="two" />
                <Picker.Item label="3 stars" value="three" />
                <Picker.Item label="4 stars" value="four" />
                <Picker.Item label="5 stars" value="five" />
              </Picker>
            </View>

            <Text style={StyleFilters.title}>Reviewers</Text>
            <View style={StyleFilters.dropdown}>
              <Picker style={StyleFilters.selectDropdown}>
                <Picker.Item
                  label="1 star"
                  value="one"
                  style={StyleFilters.pickerItem}
                />
                <Picker.Item label="2 stars" value="two" />
                <Picker.Item label="3 stars" value="three" />
                <Picker.Item label="4 stars" value="four" />
                <Picker.Item label="5 stars" value="five" />
              </Picker>
            </View>

            <Text style={StyleFilters.title}>Time to prepare</Text>
            <View style={StyleFilters.dropdown}>
              <Picker style={StyleFilters.selectDropdown}>
                <Picker.Item
                  label="1 star"
                  value="one"
                  style={StyleFilters.pickerItem}
                />
                <Picker.Item label="2 stars" value="two" />
                <Picker.Item label="3 stars" value="three" />
                <Picker.Item label="4 stars" value="four" />
                <Picker.Item label="5 stars" value="five" />
              </Picker>
            </View>

            <Text style={StyleFilters.title}>Number Of Steps</Text>
            <View style={StyleFilters.dropdown}>
              <Picker style={StyleFilters.selectDropdown}>
                <Picker.Item
                  label="1 star"
                  value="one"
                  style={StyleFilters.pickerItem}
                />
                <Picker.Item label="2 stars" value="two" />
                <Picker.Item label="3 stars" value="three" />
                <Picker.Item label="4 stars" value="four" />
                <Picker.Item label="5 stars" value="five" />
              </Picker>
            </View>

            <Text style={StyleFilters.title}>Ingredients</Text>
            <View style={StyleFilters.dropdown}>
              <Picker style={StyleFilters.selectDropdown}>
                <Picker.Item
                  label="1 star"
                  value="one"
                  style={StyleFilters.pickerItem}
                />
                <Picker.Item label="2 stars" value="two" />
                <Picker.Item label="3 stars" value="three" />
                <Picker.Item label="4 stars" value="four" />
                <Picker.Item label="5 stars" value="five" />
              </Picker>
            </View>

            <View style={{marginTop: 20, marginBottom: 40}}>
              <Button
                title="APPLY FILTERS"
                onPress={() => this.closeModal()}
                color="#FD6721"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Filters;
