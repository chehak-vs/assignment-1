import {View, Text, ImageBackground, Pressable} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import React from 'react';

import {COLORS} from '../../themes';

import styles from './DActiveCard-styles';
import ASButton from '../button/ASButton';

const DActiveCard = (props: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={props.imageURL} style={styles.bgImage}>
        <View style={styles.subContainer}>
          <LinearGradient
            colors={COLORS.dActiveTextGradient}
            locations={[0, 0.8792, 1]}
            style={styles.innerContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.subContainer}>
                <Text style={[styles.text, {color: props.color}]}>
                  {props.title}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.buttonContainer}>
          <ASButton text="2 min" />
          <ASButton text="4 min" />
          <ASButton text="8 min" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default DActiveCard;