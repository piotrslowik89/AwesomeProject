import React from 'react';
import { View, Text, Button } from 'react-native';

import { SCREENS } from '../../../navigation/constans';

export default function OnBoarding({ navigation }) {
  return (
    <View>
      <Text>Hello</Text>
      <Button
        title={'Go to Login'}
        onPress={() => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID)}
      />
      <Button
        title={'Go to Signup'}
        onPress={() => navigation.navigate(SCREENS.AUTH.LOGIN.ID)}
      />
    </View>
  );
}
  