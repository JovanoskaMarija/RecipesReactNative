import { StyleSheet } from 'react-native'

const StyleFilters = StyleSheet.create({
    filters: {
        padding: 20,
 
    },
    dropdown: {
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderColor: '#999999',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    title: {
        color: '#494843',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    },
    selectDropdown: {
        width: '100%',
        display: 'flex',
        color: '#666666',
        fontSize: 19,
    },
    pickerItem: {
        // fontSize: 20
    },
    button: {
        width: '100%',
        color: '#FD6721',
        marginVertical: 40,
        borderRadius: 15,
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 30,
        padding: 40
    }
})

export default StyleFilters