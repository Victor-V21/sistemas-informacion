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
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 8,
    },
    button : {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color : Colors.textPrimary,
        fontFamily: "MPlusRounded1c",
        fontWeight: '300'
    }
});
