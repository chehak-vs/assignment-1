import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './ASButton-styles'

const ASButton = (props: any) => {
  return (
    <View>
      <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{props.text}</Text>
          </Pressable>
    </View>
  )
}

export default ASButton;