import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    cardUserReviews: {
        width: '90%',
        margin: '5%',
        borderRadius: 15,
        padding: 10,
        backgroundColor: 'white'
    },
    singleReview: {
        marginBottom: '2%'
    },
    reviewTitle: {
        color: '#FD6721',
        fontSize: 20
    },
    userInformation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    nameAndDate: {
        fontSize: 15,
        color: '#9B9B9B',
        textTransform: 'uppercase'
    },
    starAndRating: {
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        color: '#FD6721',
        fontSize: 20
    },
    rating: {
        color: '#9B9B9B',
        fontSize: 15,
        marginLeft: 10
    },
    description: {
        color: '#666666',
        fontSize: 16,
        marginBottom: 25
    },
    paragraph: {
        display: 'flex'
    },
    linkAndIcon: {
        display: 'flex',
        flexDirection: 'row'
    },
    link: {
        marginRight: 10,
        color: '#FD6721',
        fontSize: 16,
        fontWeight: 'bold'
    },
    horizontalLine: {
        borderBottomColor: '#9B9B9B',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    }
})

export default Style
