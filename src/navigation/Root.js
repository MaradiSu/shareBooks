import React from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import CustomDrawer from "./CustomDrawer";
import Request from '../components/Requests/index';
import Help from '../components/Help/index';
const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
)

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={
        (props) => (
          <CustomDrawer {...props} />)
      }>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Requests">
           {() => <Request />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <Help />}
        </Drawer.Screen>

        <Drawer.Screen name="Favourites">
          {() => <DummyScreen name={"Wallet"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={"Settings"} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
