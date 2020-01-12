import React from 'react';
import {View, ScrollView} from 'react-native';
import {Switch, Route} from 'react-router-native';
import Header from './Header/index';
import Home from './Home';
import Favourites from './Favourites';
import Details from './Details';
import Search from './Search';

import {connect} from 'react-redux';
import {fetchRecipes} from '../store/actions/recipeAction';
import {addToFavourites} from '../store/actions/favouriteAction';

// import Style from './style';

// const mapStateToProps = state => {
//   return {
//     recipes: state.recipes,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchRecipes: () => {
//       dispatch(fetchRecipes());
//     },
//   };
// };

class Test extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isFavourite: [],
  //     filterName: '',
  //     filterRating: '',
  //     showSearch: false,
  //   };
  // }

  // componentDidMount = () => {
  //   this.props.fetchRecipes();
  // };
  // addItemsToCart = recipe => {
  //   this.props.addToFavourites(recipe);
  // };
  // handleShowSearch = () => {
  //   this.setState(
  //     {
  //       showSearch: !this.state.showSearch,
  //     },
  //     console.log('Se menvit?', this.state.showSearch),
  //   );
  // };

  // handleFilterName = searchText => {
  //   this.setState({
  //     filterName: searchText,
  //   });
  // };

  // handleFilterRating = rating => {
  //   this.setState(
  //     {
  //       filterRating: rating,
  //     },
  //     console.log('vo wrapper vo handleFilterRating', typeof rating),
  //   );
  // };

  // handleFavourites = recipeID => {
  //   const newFavouriteList = this.props.recipes.map(recipe=>{
  //     if(recipe.id === recipeID){
  //       const newRecipe = recipe;
  //       newRecipe.isFavourite = !recipe.isFavourite
  //     }
  //   })
  // }

  // filterByName = recipe => {
  //   return recipe.name
  //     .toLowerCase()
  //     .includes(this.state.filterName.toLowerCase());
  // };

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    store.dispatch(fetchRecipes());
  }

  render() {
    const components = this.props.recepies.map(recipe => {
      //data.map()
      // return element.description;
      return (
        <RecipeCard
          key={id}
          recipe={recipe}
          bookmarkIcon={false}
          shortDesc={false}
        />
      );
    });

    return (
      <div id="recepies" className="flex-container">
        {components}
      </div>
    );
  }
}

//  render() {

//   const filteredData = this.props.recipes.filter(this.filterByName);
//   // .filter(this.filterByRating)
//   console.log("Test",this.props.recipes)
//   return (
//     <View >
//       {this.state.showSearch ? (
//         <Search
//           // showSearch={this.state.showSearch}
//           handleShowSearch={this.handleShowSearch}
//           recipes={filteredData}
//           // recipes={this.state.recipes}
//           filterName={this.state.filterName}
//           handleFilterName={this.handleFilterName}
//         />
//       ) : (
//         <Header
//           showSearch={this.state.showSearch}
//           handleShowSearch={this.handleShowSearch}
//         />
//       )}

//       <ScrollView>
//         <Switch>
//           <Route
//             exact
//             path="/"
//             // render={() => <Home recipes={this.props.recipes} />}
//             render={() => (
//               <Home
//                 recipes={filteredData}
//               // recipes={this.state.recipes}
//                 addToFavourites={this.addToFavourites}
//               />
//             )}
//           />
//           <Route
//             path="/recipe/:id"
//             render={props => (
//               <Details
//                 {...props}
//                 filteredData={filteredData}
//               // recipes={this.state.recipes}
//                 addToFavourites={this.addToFavourites}
//               />
//             )}></Route>
//           <Route
//             exact
//             path="/favourites"
//             render={() => <Favourites
//                recipes={filteredData}
//               //  recipes={this.state.recipes}
//                />}
//             addToFavourites={this.addToFavourites}
//             //   component={CharacterDetails}
//           />

//         </Switch>
//       </ScrollView>
//     </View>
//   );
// }
// }

function mapStateToProps(state) {
  return {
    recipes: state.recipes.recipes,
  };
}
export default connect(mapStateToProps)(Test);

// const mapStateToProps = state => ({
//   recipes: state.recipes
// });
// export default connect(mapStateToProps, {fetchRecipes, addToFavourites})(Test);

// const Wrapper = connect(mapStateToProps, mapDispatchToProps)(WrapperCom);

// export default Test;
