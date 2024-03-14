import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {COLORS, Spaces} from '../../themes';

interface Styles {
  container: ViewStyle;
  image: ViewStyle;
  subContainer: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

const styles: Styles = StyleSheet.create({
  container: {
    borderRadius: Spaces.space_16,
  },
  image: {
    height: Spaces.space_148,
    margin: Spaces.space_20,
  },
  subContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: Spaces.space_1,
  },
  textContainer: {
    height: Spaces.space_41,
  },
  text: {
    fontSize: Spaces.space_18,
    fontFamily: 'Fraunces Regular',
    lineHeight: Spaces.space_25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    height: Spaces.space_60,
    width: '100%',
  },
  button: {
    height: Spaces.space_36,
    width: Spaces.space_93,
    borderRadius: Spaces.space_8,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Spaces.space_16,
    elevation: Spaces.space_3,
    shadowOpacity: Spaces.space_6,
    gap: Spaces.space_8,
  },
  buttonText: {
    fontSize: Spaces.space_12,
    lineHeight: Spaces.space_18,
    color: COLORS.neutral[700],
  },
});

export default styles;