import { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

import restaurants from '../../../assets/data/restaurants.json';
const restaurant = restaurants[0];
import BasketDishItem from '../../components/BasketDishItem'


const Basket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 18}}>Your Items</Text>
            <FlatList data={restaurant.dishes}  renderItem={({item}) => <BasketDishItem basketDish={item} />}
            />
            <View style={styles.seperator} />
            <View style={styles.button}>
                <Text style={styles.buttonText}> Create Order </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
    },
    seperator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,

    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,

    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20
    },
    quantityContainer: {
        color: 'lightgrey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 5,
        borderRadius: 3,
    }


})

export default Basket;
