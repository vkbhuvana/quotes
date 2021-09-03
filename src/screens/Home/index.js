// library imports
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

// constants
import strings from '../../constants';
import Header from '../../components/Header';

// user components
import Quotes from '../../components/Quotes';

// destructure
const { URL } = strings;

/**
 * @function Home
 * @returns {JSX}
 */
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(json => setData(json));
  });
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Quotes data={data} />
    </View>
  );
};

export default Home;
