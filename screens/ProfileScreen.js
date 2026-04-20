import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import ProfileCard from "../components/ProfileCard"
import CounterButton from "../components/CounterButton"
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard/>
      <CounterButton/>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#00f",
        
    }
})

export default ProfileScreen