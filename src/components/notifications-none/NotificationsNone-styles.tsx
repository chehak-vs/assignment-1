import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {Spaces, COLORS} from '../../themes';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  text: TextStyle;
}

const styles: Styles = StyleSheet.create({
  container: {},
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spaces.space_184,
    marginBottom: Spaces.space_259,
    marginLeft: Spaces.space_20,
    marginRight: Spaces.space_20,
  },
  image: {
    height: Spaces.space_154,
    width: Spaces.space_154,
  },
  title: {
    fontSize: Spaces.space_24,
    alignSelf: 'center',
    color: COLORS.tundora,
    lineHeight: Spaces.space_32,
  },
  text: {
    fontSize: Spaces.space_16,
    lineHeight: Spaces.space_24,
    alignSelf: 'center',
    color: COLORS.tundora,
  },
});

export default styles;