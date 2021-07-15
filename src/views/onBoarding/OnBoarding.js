import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OnBoarding({ navigation }) {
  return (
    <View>
      <Text>Hello</Text>
      <Button
        title={'Go to Dashboard'}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
