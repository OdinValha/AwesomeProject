import React from 'react';
import { View, Image} from 'react-native';

export default function Bird() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ej09WZGe5_WEqM_lzYSxeCJmNpfXPKydGQ&s"  }} 
                style={{width: '100%', height: 500}}
                /> 
                           
        </View>
    );
}
