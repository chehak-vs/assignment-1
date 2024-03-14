import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS, Spaces } from "../../themes";

interface Styles {
    button: ViewStyle;
    buttonText: TextStyle;
  }

const styles: Styles = StyleSheet.create({
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
})

export default styles;