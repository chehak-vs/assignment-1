import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {Spaces} from '../../themes';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

const styles: Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: Spaces.space_24,
    width: Spaces.space_24,
    marginVertical: Spaces.space_16,
  },
  text: {
    fontSize: Spaces.space_18,
    alignSelf: 'center',
    paddingVertical: Spaces.space_16,
  },
});

export default styles;