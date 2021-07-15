import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../../navigation/AuthProvider';

export default function LoginScreen() {
  const { setUser } = useContext(AuthContext);
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title={'login'}
        onPress={() => {
          setUser();
        }}
      />
    </View>
  );
}
