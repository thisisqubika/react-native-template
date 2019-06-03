import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import TextStyles from 'helpers/TextStyles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ErrorView = (props) => {
  if (props.errors.length === 0) {
    return null;
  }
  return (
    <View style={styles.container} >
      {
        props.errors.map((error, index) => (
          <Text style={TextStyles.error} key={index}>
            {error}
          </Text>
        ))
      }
    </View>
  );
};

ErrorView.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default ErrorView;
