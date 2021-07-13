import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { FormattedMessage } from 'react-intl';

import { LangContext } from '../../lang/LangProvider';
import { LANGUAGES } from '../../lang/constans';

export default function HomeView() {
  const [, handleChangeLanguage] = useContext(LangContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        <FormattedMessage defaultMessage={'Hello'} id={'hello'} />
      </Text>
      <Button
        title={'Change language'}
        onPress={() => handleChangeLanguage(LANGUAGES.ENG)}
      />
    </View>
  );
}