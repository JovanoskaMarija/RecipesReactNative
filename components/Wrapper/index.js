import React from 'react';
import {View, ScrollView} from 'react-native';
import {Switch, Route} from 'react-router-native';
import Header from '../Header/index';
import Home from '../Home';
import Favourites from '../Favourites';
import Details from '../Details';
import Search from '../Search';

import {connect} from 'react-redux';
import {fetchRecipes} from '../../actions/actions';

import Style from './style';

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => {
      dispatch(fetchRecipes());
    },
  };
};

class WrapperCom extends React.Component {
  constructor() {
    super();
    this.state = {
      favourites: [],
      filterName: '',
      filterRating: '',
      showSearch: false,
    };
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  handleFavourites = recipeID => {
    this.setState(() => {
      console.log('wrapper handleFavourites:', recipeID);
      const recipeList = this.props.recipes;
      console.log('recipeList wrapper', recipeList);
      const newRecipeList = recipeList.map(recipe => {
        if (recipe.id === recipeID) {
          const newRecipe = recipe;
          newRecipe.favourites = !recipe.favourites;
          return newRecipe;
        } else {
          return recipe;
        }
      });
      return {recipes: newRecipeList};
    });
  };

  handleShowSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch,
    });
  };

  handleFilterName = searchText => {
    this.setState({
      filterName: searchText,
    });
  };

  filterByName = recipe => {
    return recipe.name
      .toLowerCase()
      .includes(this.state.filterName.toLowerCase());
  };

  render() {
    const filteredData = this.props.recipes.filter(this.filterByName);
    // .filter(this.filterByRating)
    const favList = this.props.recipes.filter(recipe => recipe.favourites);
    return (
      <View style={Style.wrapper}>
        {this.state.showSearch ? (
          <Search
            handleShowSearch={this.handleShowSearch}
            recipes={filteredData}
            filterName={this.state.filterName}
            handleFilterName={this.handleFilterName}
          />
        ) : (
          <Header
            showSearch={this.state.showSearch}
            handleShowSearch={this.handleShowSearch}
          />
        )}

        <ScrollView>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  recipes={filteredData}
                  recs={this.props.recipes}
                  favList={favList}
                  handleFavourites={this.handleFavourites}
                />
              )}
            />
            <Route
              path="/recipe/:id"
              render={props => (
                <Details
                  {...props}
                  filteredData={filteredData}
                  favList={favList}
                  handleFavourites={this.handleFavourites}
                />
              )}></Route>
            <Route
              exact
              path="/favourites"
              render={() => (
                <Favourites
                  recipes={filteredData}
                  favourites={this.state.favourites}
                  favList={favList}
                />
              )}
            />
          </Switch>
        </ScrollView>
      </View>
    );
  }
}

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(WrapperCom);

export default Wrapper;
