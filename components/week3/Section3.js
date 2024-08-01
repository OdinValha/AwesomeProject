// import React from 'react';
// import { FontAwesome } from "@expo/vector-icons";
// import { Image, Text, View } from 'react-native';
// export default function Hotel() {
//     return (
//         <View style={{ padding: 20 }}>
//             {/* View ก้อนที่ 1  */}
//             <View style={{ flexDirection: "row", padding: 10 }}>
//                 <View style={{ width: 50, height: 50, borderRadius: 50 / 2 ,color: "orange" }} />
//                 <Text>9.5</Text>
//                 <View style={{ paddingLeft: 10 }}>
//                     <Text style={{ fontSize: 20 ,color: "orange" }}>Excellent</Text>
//                     <Text>See 801 reviews</Text>
//                 </View>
//             </View>
//         </View>

//     );
// }
import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from 'react-native';

export default function Hotel() {
    return (
        <View style={{ padding: 20 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10, alignItems: 'center' }}>
                <View style={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: 45, 
                    backgroundColor: 'red', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>9.5</Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color: "red" }}>Excellent</Text>
                    <Text style={{color: '#444444'}}>See 801 reviews</Text>
                </View>
            </View>
        </View>
    );
}
