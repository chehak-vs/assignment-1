import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import { COLORS, Spaces } from '../../themes';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
  timeContainer: ViewStyle;
  separator: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral[100],
  },

  subContainer: {
    flexDirection: 'row',
    marginLeft: Spaces.space_20,
    marginRight: Spaces.space_20,
    marginTop: Spaces.space_17,
  },
  image: {
    height: Spaces.space_48,
    width: Spaces.space_48,
  },
  text: {
    marginLeft: Spaces.space_20,
    marginRight: Spaces.space_8,
    fontSize: Spaces.space_14,
  },
  timeContainer: {
    marginLeft: Spaces.space_20,
    marginRight: Spaces.space_20,
    paddingLeft: Spaces.space_76,
    marginBottom: Spaces.space_17,
  },
  separator: {
    height: Spaces.space_1, 
    backgroundColor: COLORS.neutral[100], 
  },
});

export default styles;
