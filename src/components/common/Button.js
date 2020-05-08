import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import TextStyles from 'helpers/TextStyles';

const Button = props => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      borderWidth: 1,
      marginTop: 10,
      padding: 5,
      borderColor: colors.border,
      borderRadius: 5,
    },
  });

  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, props.style]}
    >
      <Text
        style={[TextStyles.fieldTitle, props.textStyle, { color: colors.text }]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default Button;
