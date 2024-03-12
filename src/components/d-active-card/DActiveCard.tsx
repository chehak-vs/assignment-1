import { View, Text, ImageBackground, Pressable } from 'react-native'
import {LinearGradient} from 'react-native-linear-gradient'
import React from 'react'
import styles from './DActiveCard-styles'

export default function DActiveCard(props) {
  return (
    <View style={styles.listContainer}>
                  <ImageBackground source={props.imageURL} style={styles.bgImage}>
                    <View style={styles.innerContainer}>
                      <View style={styles.textContainer}>
                        <Text style={[styles.text, {color: props.color}]}>{props.title}</Text>
                      </View>
  
                      <View style={styles.buttonContainer}>
                        <Pressable style={styles.button}>
                          <Text style={styles.buttonText}>2 min</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                          <Text style={styles.buttonText}>4 min</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                          <Text style={styles.buttonText}>8 min</Text>
                        </Pressable>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
  )
}