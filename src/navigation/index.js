import { createStackNavigator } from '@react-navigation/stack';
import DishDetailScreen from '../screens/DishDetailScreen';
import HomeScreen from '../screens/homeScreen';
import RestaurantDetailScreen from '../screens/restaurantDetailsScreen';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../components/OrderDetails';
import Basket from '../screens/Basket';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeTabs}/>
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return(
        <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen 
            name='Home'component={HomeStackNavigator} 
            options={{tabBarIcon: ({color}) => <Foundation name='home' size={24} color={color}/>}}/>
            <Tab.Screen 
            name='Orders'component={OrderStackNavigator}
             options={{tabBarIcon: ({color}) => <MaterialIcons name='list-alt' size={24} color={color}/>}} />
            <Tab.Screen 
            name='Profile'component={OrderScreen}
             options={{tabBarIcon: ({color}) => <FontAwesome5 name='user-alt' size={24} color={color}/>}}/>
        </Tab.Navigator>
    );
}

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name='Restaurants' component={HomeScreen}/>
        <HomeStack.Screen name='Restaurant' component={RestaurantDetailScreen}/>
        <HomeStack.Screen name='Dish' component={DishDetailScreen}/>
        <HomeStack.Screen name='Basket' component={Basket}/>
        </HomeStack.Navigator>
        
    )
} 

const OrderStack = createStackNavigator();
const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>
        <OrderStack.Screen name='Orders' component={OrderScreen}/>
        <OrderStack.Screen name='Order' component={OrderDetails}/>
        </OrderStack.Navigator>
        
    )
} 

export default RootNavigator;