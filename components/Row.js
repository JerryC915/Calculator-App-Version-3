import {StyleSheet, View} from "react-native";
const Row = ({children}) => {
    return <View style={styles.container} >{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", //Change size of each button depending on the # of elements
    },
});

export default Row;