import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { colors, constants, spacing, typography } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.MAIN_COLORS.PRIMARY,
    borderRadius: constants.BORDER_RADIUS.BUTTON,
    padding: spacing.SCALE_12,
  },
  label: {
    ...typography.FONT_BOLD,
  },
});

export default function Button({ label, isChevronDisplayed = false }) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <View />
        <Text style={styles.label}>{label}</Text>
        <View>{isChevronDisplayed}</View>
      </View>
    </TouchableOpacity>
  );
}

Button.PropTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  isChevronDisplayed: PropTypes.bool,
};
