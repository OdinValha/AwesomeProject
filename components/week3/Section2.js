import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';

export default function Hotel() {
    return (
        <View style={{ padding: 20, marginTop: -25 }}>
            <View style={{
                backgroundColor: 'whitesmoke',
                marginTop: -25, padding: 20,
                borderWidth: 1,
                borderBlockColor: 'gray',
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>
                <Text style={{ textAlign: 'center' }}>Hotel Description</Text>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center'
                }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                <Text style={{
                    textAlign: 'center',
                    color: '#444444'
                }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>
    );
}
