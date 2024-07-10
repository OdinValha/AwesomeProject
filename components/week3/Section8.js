import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Button, Image, Text, View } from 'react-native';
export default function Hotel() {
    return (
        <View style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            
        }}>
            <View style={{ flexDirection: "column", }}>
                <Text style={{ fontSize: 10, }}> Price</Text>
                <Text style={{ fontSize: 20, color: '#FF8000' }}> $399.99</Text>
                <Text style={{ fontSize: 10, }}> AVG/Night</Text>
            </View>
            <View style={{ borderRadius : 10, }}>
            <Button 
                title="Book Now"
                color="#FF8000"
            />
            </View>

        </View>
    );
}
