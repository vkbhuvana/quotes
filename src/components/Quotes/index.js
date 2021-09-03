// library imports
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

// constants
import strings from '../../constants';

/**
 * @function Quotes
 * @returns {JSX}
 */
const Quotes = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={{ uri: strings.BG_RANDOM_IMAGE_URL }}
      >
        <Text style={styles.quoteText}>{props.data[0].text}</Text>
        <Text
          style={[styles.quoteText, styles.authorText]}
        >{`- ${props.data[0].author}`}</Text>
      </ImageBackground>
    </View>
  );
};

export default Quotes;
