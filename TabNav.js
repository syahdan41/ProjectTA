import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SensorPage,SettPage,HomePage} from './StackNavigator';

const Tab = createBottomTabNavigator();

function TabNav () {
  return(
        <Tab.Navigator  screenOptions={{headerShown:false}}>
            <Tab.Screen name = 'Home' component={HomePage}/>
            <Tab.Screen name='Sensor' component={SensorPage} />
            <Tab.Screen name='Pengaturan' component={SettPage} />
        </Tab.Navigator>
  );
}

export default TabNav;