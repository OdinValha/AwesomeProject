import React from "react";
import { View, TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function Menu() {
    return (
        <View style={{
            margin: 20, padding: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            
        }}>
            <View style={{ flexDirection: "row", marginTop: 10, }}>
                <MyIcon title="wifi" name="wifi" size={30} color="skyblue" />
                <MyIcon title="coffee" name="coffee" size={30} color="skyblue" />
                <MyIcon title="bath" name="bath" size={30} color="skyblue" />
                <MyIcon title="car" name="car" size={30} color="skyblue" />
                <MyIcon title="paw" name="paw" size={30} color="skyblue" />
            </View>
        </View>
    );
}
