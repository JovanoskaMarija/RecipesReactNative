import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    cardDescription: {
        fontFamily: 'Montserrat-Regular',
        width: '90%',
        margin: '5%',
        borderRadius: 15,
        padding: 20,
        backgroundColor: 'white'
    },
    recipeTitle: {
        fontFamily: 'Gilroy-ExtraBold 800',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
        color: '#494843'
    },
    recipeDescription: {
        fontFamily: 'Montserrat-Regular',
        color: '#666666',
        fontSize: 16,
        marginBottom: 30
    },
    horizontalLine: {
        borderBottomColor: '#9B9B9B',
        borderStyle: 'solid',
        borderBottomWidth: 1
    },
    information: {
        marginTop: 20
    },
    reviewers: {
        fontFamily: 'Montserrat-Regular',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        color: '#FD6721',
        fontSize: 20
    },
    rating: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 10,
        marginRight: 5,
        fontSize: 15,
        color: '#9B9B9B'
    },
    verticalLine: {
        borderLeftColor: '#9B9B9B',
        borderStyle: 'solid',
        borderLeftWidth: 1
    },
    reviews: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 5,
        fontSize: 15,
        color: '#9B9B9B'
    },
    recipeBookmarkIcon: {
        color: '#FD6721',
        fontSize: 20
    },
    prepTimeRow: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    prepTime: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 10,
        fontSize: 15,
        color: '#9B9B9B'
    },
    stepsRow: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    steps: {
        fontFamily: 'Montserrat-Regular',
        color: '#9B9B9B',
        fontSize: 15,
        marginLeft: 10
    },
    ingredientsRow: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    ingredients: {
        fontFamily: 'Montserrat-Regular',
        color: '#9B9B9B',
        fontSize: 15,
        marginLeft: 10
    }
})

export default Style
