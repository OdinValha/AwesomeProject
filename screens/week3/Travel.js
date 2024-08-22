import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Card from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import MyIcon from '../../components/week3/MyIcon';
import Menu from '../../components/week3/Menu';
import { useNavigation } from '@react-navigation/native';


export default function Travel() {
    const navigation = useNavigation();
    return (

        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingTop: 50 }}>
                    {/* <Text>Text of Week 3 </Text> */}
                    <Menu />
                    <Card />
                    <Hotel />
                    <Signup />
                </View>
                <Button title="Next" onPress={() => navigation.navigate("")} />
            </View>
        </ScrollView>

    );
}
