import React from 'react'
import { Text, View, Image, Pressable } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ restaurant }) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Restaurant', {id: restaurant.id});
    }
    return (
        <View>
            <Pressable onPress={onPress} style={styles.restaurantContainer}>
                <Image source={{
                    uri: restaurant.image,
                }}
                    style={styles.image} />
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>{restaurant.name}</Text>
                        <Text style={styles.subtitle}>${restaurant.deliveryFee}
                            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
                    </View>
                    <View style={styles.rating}>
                        <Text>{restaurant.rating}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default RestaurantItem;