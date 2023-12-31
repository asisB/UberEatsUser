import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
      <View style={styles.page}>
      <FlatList data={restaurants}  
      renderItem={({item}) => 
      <RestaurantItem restaurant={item} />} 
      showsVerticalScrollIndicator={false}/> 
           </View>
  );
}
/*
   uses of item to display all the list of product 
*/


const styles = StyleSheet.create({
    page: {
        padding: 10
    }
});
