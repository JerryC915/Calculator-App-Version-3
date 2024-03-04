import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";

export default ({onPress, text, size, theme}) => {
    const buttonStyle = [styles.button];
    const textStyle = [styles.text];

    if(size === "double") {
        buttonStyle.push(styles.buttonDouble);
    }
    if(theme === "secondary") { //different color scheme
        buttonStyle.push(styles.buttonSecondary);
        textStyle.push(styles.textSecondary);
    }else if(theme === "accent") {
        buttonStyle.push(styles.buttonAccent);
    }
    return (
        <TouchableOpacity onPress = {onPress} style = {buttonStyle}>
            <Text style = {textStyle}>{text}</Text>
        </TouchableOpacity> //Better User experience
    );
};

const screen = Dimensions.get("window");
const buttonWidth = screen.width/4;
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#000000',
        flex:1,
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Math.floor(buttonWidth),
        margin: 5,
    },
    text : {
        color: '#fff',
        fontSize: 25,
    },
    textSecondary: {
        color: '#000000'
    },
    buttonDouble: {
        width: screen.width/2-10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40,
    },
    buttonSecondary: {
        backgroundColor: "#bfbbbb"
    },
    buttonAccent: {
        backgroundColor: "#fcb212"
    },
});
