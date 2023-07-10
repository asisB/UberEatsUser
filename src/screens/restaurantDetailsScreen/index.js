import { View, Text, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import restaurants from '../../../assets/data/restaurants.json';
import Header from './Header';
import styles from './style';
import { useNavigation, useRoute } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
    const route = useRoute(); //state, route from where data is coming
    const id = route.params?.id;
    const navigate = useNavigation();
    console.log(id);

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent= {() => <Header restaurant={restaurant}/>}
                data={restaurant.dishes}
                renderItem={({ item }) => <DishListItem dish={item} />}
                keyExtractor={(item) => item.name}
                 />

            <Ionicons onPress={() => navigate.goBack()} name="arrow-back-circle"
                size={45}
                color='white'
                style={styles.iconContainer} />
        </View>
    );
}

export default RestaurantDetailScreen;
