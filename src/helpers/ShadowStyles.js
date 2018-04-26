import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default styles;
