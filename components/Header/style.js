import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent:'center',
    height: 60,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    shadowColor: '#878787',
    shadowOpacity: 0.3,
    elevation: 6,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 35,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    
    color: '#999999',
    marginLeft: 20,
    marginRight: 20,
  },
  logo:{
    fontFamily: 'LobsterTwo-BoldItalic',
    fontSize: 28
  },
  line:{
    fontSize:40
  }
});

export default Style;
