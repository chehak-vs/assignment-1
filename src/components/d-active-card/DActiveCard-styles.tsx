import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {Spaces, COLORS, Typography} from '../../themes';

interface Styles {
  listContainer: ViewStyle;
  bgImage: ViewStyle;
  innerContainer: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  gradient: TextStyle;
}

const styles: Styles = StyleSheet.create({
  listContainer: {
    borderRadius: Spaces.space_20,
  },
  bgImage: {
    height: Spaces.space_148,
    margin: Spaces.space_20,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: Spaces.space_1,
  },
  textContainer: {
    height: Spaces.space_81,
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
  gradient: {
    paddingHorizontal: Spaces.space_16,
    paddingVertical: Spaces.space_8,
    width: '100%',
  },
});

export default styles;
