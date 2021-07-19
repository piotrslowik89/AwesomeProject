import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { colors, spacing, typography } from '../../../styles';

import TextButton from '../../../components/text-button';
import Button from '../../../components/button';

import { SCREENS } from '../../../navigation/constans';
import { FormattedMessage } from 'react-intl';
import Pagination from '../../../components/pagination';

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  continer: {
    flex: 1,
    paddingHorizontal: spacing.SCALE_18,
    paddingVertical: spacing.SCALE_18,
  },
  skipButton: {
    color: colors.ADDITIONAL_COLORS.TEXT.HINT,
  },
  actionContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    ...typography.FONT_BOLD,
    textAlign: 'center',
    fontSize: typography.FONT_SIZE_18,
  },
  subTitle: {
    textAlign: 'center',
    color: colors.ADDITIONAL_COLORS.TEXT.HINT,
  },
});

export default function OnBoarding({ navigation }) {
  const [page, setPage] = useState(0);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.continer}>
        <View style={styles.actionContainer}>
          <TextButton
            label={
              <FormattedMessage
                defaultMessage={'Skip'}
                id={'views.auth.onboarding.skip'}
              />
            }
            TextProps={{ style: styles.skipButton }}
            onPress={() => {
              navigation.navigate(SCREENS.AUTH.LOGIN.ID);
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>
            <FormattedMessage
              defaultMessage={'Start Learning New Skills'}
              id={'views.auth.onboarding.skills.title'}
            />
          </Text>
          <Text style={styles.subTitle}>
            <FormattedMessage
              defaultMessage={
                'Learn almost any skill from a comfort of your home with our app.'
              }
              id={'views.auth.onboarding.skills.subtitle"'}
            />
          </Text>
        </View>
        <Pagination />
        <View>
          <Button
            label={
              <FormattedMessage
                id={'views.auth.onboarding.get-starte'}
                defaultMessage={'Get Started'}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
