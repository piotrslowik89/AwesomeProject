import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: spacing.SCALE_8,
    height: spacing.SCALE_8,
    backgroundColor: colors.ADDITIONAL_COLORS.GREY.MAIN,
    borderRadius: spacing.SCALE_8,
    marginLeft: spacing.SCALE_8 / 2,
    marginRight: spacing.SCALE_8 / 2,
  },
  activeDot: {
    width: spacing.SCALE_16,
    backgroundColor: colors.MAIN_COLORS.SECONDARY,
  },
});

export default function Pagination({ pages = 0, activePage = 0 }) {
  return (
    <View style={styles.container}>
      {new Array(pages).fill(null).map((page, index) => (
        <View
          key={'page-${index}'}
          style={[
            styles.dot,
            index === activePage ? styles.activeDot : {},
          ]}></View>
      ))}
    </View>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
};
