import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { TextStyles } from '_theme';

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
        style={[
          { color: colors.text },
          TextStyles.textField,
          styles.field,
          style,
        ]}
        placeholderTextColor={colors.text}
        underlineColorAndroid="transparent"
        {...rest}
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
