import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import TextStyles from 'helpers/TextStyles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function ErrorView({ errors }) {
  const { colors } = useTheme();

  if (errors.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {errors.map(error => (
        <Text key={error} style={[TextStyles.error, { color: colors.error }]}>
          {error}
        </Text>
      ))}
    </View>
  );
}

ErrorView.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default ErrorView;
