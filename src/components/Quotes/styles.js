import { StyleSheet } from 'react-native';
import { fontSizes, sizes } from '../../styles/globalstyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  quoteText: {
    color: 'white',
    fontSize: fontSizes.quote,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000055',
  },
  authorText: {
    fontSize: fontSizes.heading,
    textAlign: 'right',
    paddingRight: sizes[16],
  },
});

export default styles;
