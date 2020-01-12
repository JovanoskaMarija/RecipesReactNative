import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    shadowColor: '#878787',
    shadowOpacity: 0.3,
    elevation: 6,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  input: {
    width: '70%',
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
    // marginBottom: 10,
    fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        padding: 0,
  },
  icon: {
    fontSize: 30,
    color: '#999999',
  },
  line: {
    fontSize: 40,
  },
});

export default Style;
