import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import ProfileCard from "../components/ProfileCard"

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard/>
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