import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import Colors from '../../themes/color';

interface Styles {
  listCardContainer: ViewStyle;
  listContainer: ViewStyle;
  listImage: ImageStyle;
  listText: TextStyle;
  listTimeContainer: ViewStyle;
  listTime: TextStyle;
  separator: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  listCardContainer: {
    backgroundColor: Colors.Nuetral100,
  },

  listContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 17,
  },
  listImage: {
    height: 48,
    width: 48,
  },
  listText: {
    marginLeft: 20,
    marginRight: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  listTimeContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 76,
    marginBottom: 17,
  },
  listTime: {},
  separator: {
    height: 1, 
    backgroundColor: '#E2E8EB', 
  },
});

export default styles;
