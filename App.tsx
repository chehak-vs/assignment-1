import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notifications from './src/screens/notifications/Notifications'
import TopNav from './src/components/top-nav/TopNav'
import DActive from './src/screens/d-active/DActive'

export default function App() {
  return (
    <SafeAreaView>
      {/* <Notifications /> */}
      <DActive />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})