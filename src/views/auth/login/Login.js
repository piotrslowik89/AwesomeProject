import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../../navigation/AuthProvider';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title={'login'}
        onPress={() => {
          login('xx@xx.xx', 'somepass');
        }}
      />
    </View>
  );
}
