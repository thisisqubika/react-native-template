import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  line: {
    marginTop: 2,
    height: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  field: {
    alignSelf: 'stretch',
  },
});

const TextField = props => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[{ color: colors.text }, TextStyles.textField, styles.field, props.style]}
        underlineColorAndroid="transparent"
      />
      <View style={styles.line} />
    </View>
  );
};

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};

export default TextField;
