import React from 'react';
import { Button, ScrollView, Text, TextInput } from 'react-native';


export default function Test() {
  return (
    <ScrollView style={{ margin: 50 }} >
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={30}
        multiline={false}
        placeholder="Please enter your email"
        returnKeyType="next"
        onChangeText={(text) => { }}
        defaultValue="Default text"
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
        color="#665544"
      />
      <Text> Hello World </Text>
    </ScrollView>

  );
}
