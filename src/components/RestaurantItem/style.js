import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    restaurantContainer: {
        width: '100%',
        marginVertical: 10,

    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    subtitle: {
        color: 'grey'
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: 'lightgrey',
        padding: 5,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,


    }
});

export default styles;