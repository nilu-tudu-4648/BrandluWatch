import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import {
  ProfileScreen,
  BagScreen,
  ShopScreen,
  HomeScreen
} from "../screens";
const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      barStyle={{
        height: 70,
        backgroundColor: COLORS.white,
        borderTopColor: COLORS.gray,
        borderTopWidth: 0.5,
      }}
    >
      <Tab.Screen
        name="HomeN"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Shop"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" size={24} color={color} />
          ),
        }}
        component={ShopScreen}
      />
      <Tab.Screen
        name="Bag"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="handbag" size={24} color={color} />
          ),
        }}
        component={BagScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
