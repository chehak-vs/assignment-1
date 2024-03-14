import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import styles from './TopNav-styles';

const TopNav = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={[styles.image, {marginLeft: 24}]} />
      <Text style={styles.text}>{props.title}</Text>
      <Image
        source={props.imageRight}
        style={[styles.image, {marginRight: 34}]}
      />
    </View>
  );
}

export default TopNav;