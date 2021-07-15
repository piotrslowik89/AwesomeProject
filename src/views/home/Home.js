import React from 'react';
import { Text, View, Button } from 'react-native';
import { FormattedMessage } from 'react-intl';

export default function HomeView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        <FormattedMessage defaultMessage={'Hello'} id={'hello'} />
      </Text>
    </View>
  );
}
 