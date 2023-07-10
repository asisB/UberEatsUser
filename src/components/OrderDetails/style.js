import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,

    },
    title: {
        fontSize: 35,
        fontWeight: 600,
        marginVertical: 10,
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: 0.7,
    },
    subtitle: {
        color: 'grey',
        fontSize: 15,
    },
    container: {
        margin: 10,
    },
   
});

export default styles;
