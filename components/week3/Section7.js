import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{
            padding: 20, 
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor:'gray'
        }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Roomtype</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{
                    width: 90,
                    height: 100,
                    borderRadius: 10,
                }} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room
                    </Text>
                    <Text style={{
                        marginTop: 20,
                        color: "#FF8000",
                        fontSize: 20
                    }}>$399.99</Text>
                    <Text style={{
                        color: "#99FFFF",
                    }}>Hurry Up! This is your last room!
                    </Text>
                </View>

            </View>
        </View>
    );
}
