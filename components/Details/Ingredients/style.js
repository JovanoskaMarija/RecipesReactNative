import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    cardIngredients: {
        width: '90%',
        margin: '5%',
        borderRadius: 15,
        padding: 20,
        backgroundColor: 'white'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    singleIngredient: {
        display: 'flex',
        width:'95%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        flexWrap: 'wrap'
    },
    quantity: {
        width: '15%',
        color: '#FD6721',
        fontSize: 19
    },
    text: {
        width:'80%',
        fontSize: 16,
        color: '#666666',
        marginLeft: 15
    },
    icon: {
        color: '#FD6721',
        fontSize: 25
    }
})

export default Style
