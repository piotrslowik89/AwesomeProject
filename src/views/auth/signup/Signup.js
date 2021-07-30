import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button';
import TextField from '../../../components/text-field';

import { AuthContext } from '../../../navigation/AuthProvider';
import { colors, spacing, typography } from '../../../styles';
import IconButton from '../../../components/icon-button';
import GoBackIcon from '../../../assets/svg/icons/Go-back.svg';

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  title: {
    ...typography.FONT_BOLD,
    textAlign: 'center',
    fontSize: typography.FONT_SIZE_18,
    paddingVertical: spacing.SCALE_8,
  },
  subTitle: {
    textAlign: 'center',
    color: colors.ADDITIONAL_COLORS.TEXT.HINT,
    paddingVertical: spacing.SCALE_8,
  },
  actionContainer: {
    alignItems: 'flex-start',
  },
  container: {
    paddingVertical: spacing.SCALE_18,
    paddingHorizontal: spacing.SCALE_18,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default function SignupScreen(navigation) {
  const { register } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <IconButton onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </IconButton>
        </View>
        <View>
          <Text style={styles.title}>Sign Up Now</Text>
          <Text style={styles.subTitle}>
            Please provide us with this information in order to create an
            account.
          </Text>
        </View>
        <View>
          <TextField label={'Email Adress'} />
          <TextField label={'Password'} />
          <TextField label={' Confirm Password'} />
        </View>
        <Button label={'Create Account'} isChevronDisplayed={true} />
      </View>
    </SafeAreaView>
  );
}
