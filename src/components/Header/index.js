// library imports
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import moment from 'moment';

// styles
import styles from './styles';

// constants
import strings from '../../constants';

// destructure
const { QUOTES } = strings;

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>{QUOTES}</Text>
      <Text style={styles.timerText}>{moment().format('hh:mm:ss a')}</Text>
    </SafeAreaView>
  );
};

export default Header;
