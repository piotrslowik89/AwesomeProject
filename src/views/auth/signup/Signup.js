import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../../navigation/AuthProvider';

export default function SignupScreen() {
  const { register } = useContext(AuthContext);

  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title={'register'}
        onPress={() => register('xx@xx.xx', 'somepass')}
      />
    </View>
  );
}
