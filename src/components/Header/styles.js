// library imports
import { StyleSheet } from 'react-native';

// constants
import colors, { sizes, fontSizes } from '../../styles/globalstyles';

// destructuring
const { offwhite, lightgrey } = colors;
const { headerHeight } = sizes;
const { heading, timer } = fontSizes;

const styles = StyleSheet.create({
  container: {
    height: headerHeight,
    backgroundColor: offwhite,
    borderBottomColor: lightgrey,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: heading,
  },
  timerText: {
    fontSize: timer,
  },
});

export default styles;
