import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStack2 from './navigations/HomeStack2';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';
import ChartKitScreen from './screens/week5/ChartKitScreen';

export default function App() {
    return (
        <NavigationContainer>
            {/* <HomeStack2 /> */}
            {/* <BottomTab /> */}
            <RootStack />
        </NavigationContainer>
        // <ChartKitScreen />

    );
}
