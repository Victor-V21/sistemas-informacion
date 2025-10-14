import { Colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        flex : 1,
        backgroundColor: Colors.background
    },
    calculatorContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
        fontFamily: 'MPlusRounded1c',
    },
    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
        fontFamily: 'MPlusRounded1c'
    }
});
