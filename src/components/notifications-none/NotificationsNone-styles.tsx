import { StyleSheet, StyleProp, ViewStyle, TextStyle, ImageStyle  } from "react-native";
import Colors from "../../themes/color";

interface Styles {
    container: StyleProp<ViewStyle>;
    card: StyleProp<ViewStyle>;
    cardImage: StyleProp<ImageStyle>;
    cardHeading: StyleProp<TextStyle>;
    cardText: StyleProp<TextStyle>;
  }

const styles: Styles = StyleSheet.create({
    container: {
        
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 184,
        marginBottom: 259,
        marginLeft: 20,
        marginRight: 20,
    },
    cardImage: {
        height: 154,
        width: 154,
    },
    cardHeading:{
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'center',
        color: Colors.NuetralBlack,
        lineHeight: 32.4
    },
    cardText: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight:24,
        alignSelf: 'center',
        color: Colors.NuetralBlack,
    }
})

export default styles;