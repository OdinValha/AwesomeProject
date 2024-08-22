import React from 'react';
import { View, Image} from 'react-native';

export default function Cat() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1qaw1c3O1RNMUuDvLgbtdatWAvL8FZoUJQ&s"  }} 
                style={{width: '100%', height: 500}}
                /> 
                           
        </View>
    );
}
