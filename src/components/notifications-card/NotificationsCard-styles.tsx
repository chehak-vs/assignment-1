import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import { COLORS, Spaces } from '../../themes';

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
    backgroundColor: COLORS.neutral[100],
  },

  listContainer: {
    flexDirection: 'row',
    marginLeft: Spaces.space_20,
    marginRight: Spaces.space_20,
    marginTop: Spaces.space_17,
  },
  listImage: {
    height: Spaces.space_48,
    width: Spaces.space_48,
  },
  listText: {
    marginLeft: Spaces.space_20,
    marginRight: Spaces.space_8,
    fontSize: Spaces.space_14,
  },
  listTimeContainer: {
    marginLeft: Spaces.space_20,
    marginRight: Spaces.space_20,
    paddingLeft: Spaces.space_76,
    marginBottom: Spaces.space_17,
  },
  listTime: {},
  separator: {
    height: Spaces.space_1, 
    backgroundColor: COLORS.neutral[100], 
  },
});

export default styles;
