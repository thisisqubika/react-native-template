import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { View, TextInput, StyleSheet } from 'react-native';
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

function TextField({ style, ...rest }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={[
          { color: colors.text },
          TextStyles.textField,
          styles.field,
          style,
        ]}
        underlineColorAndroid="transparent"
      />
      <View style={styles.line} />
    </View>
  );
}

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};

export default TextField;
