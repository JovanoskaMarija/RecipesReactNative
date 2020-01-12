import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    recipeCard: {
        borderRadius: 15,
        margin: 10,
        paddingBottom: 0,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'white',
        display: 'flex'
    },
    recipeInformation: {
        paddingVertical: 2,
        paddingHorizontal: 16
    },
    cardImage: {
        resizeMode: 'cover',
        width: '100%',
        // width: 250,
        height: 200,
        borderRadius: 15,
        alignSelf: 'center'
    },
    recipeTitle: {
        fontFamily: 'Montserrat-Bold',
        width: 250,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10
    },
    shortDesc: {
        fontFamily: 'Montserrat-Regular',
        width: 250,
        height: 120,
        color: '#666666',
        display: 'flex',
        fontSize: 17,
        marginBottom: 20
    },
    horizontalLine: {
        borderBottomColor: '#9B9B9B',
        borderStyle: 'solid',
        borderBottomWidth: 1.5
    },
    icon: {
        color: '#FD6721',
        fontSize: 25
    },
    recipeRating: {
        fontFamily: 'Montserrat-Regular',
        paddingBottom: 15,
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row'
    },
    verticalLine: {
        borderLeftColor: '#9B9B9B',
        borderStyle: 'solid',
        borderLeftWidth: 1.5
    },
    rating: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 10,
        marginRight: 5,
        fontSize: 20,
        color: '#9B9B9B'
    },
    reviews: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 5,
        fontSize: 20,
        color: '#9B9B9B'
    },
    saveIcon: {
        color: '#FD6721',
        fontSize: 25,
        display: 'flex',
        marginRight: 0,
        paddingTop: 15
    }
})

export default Style
