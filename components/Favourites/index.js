// import React from 'react';
// import {View, Text} from 'react-native';

// class Favourites extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Favourites</Text>
//       </View>
//     );
//   }
// }

// export default Favourites;


import React from 'react'
import { View, Text } from 'react-native'
import RecipeCard from '../RecipeCard'
import StyleFavourites from './style'

class Favourites extends React.Component {
    render() {
        let favRecipes = this.props.favList.map(recipe => {
            return <RecipeCard key={recipe.id} recipe={recipe} />
        })
        return (
            <View style={StyleFavourites.gridFavourites}>
                {favRecipes}
            </View>
        )

    }
}

export default Favourites;


