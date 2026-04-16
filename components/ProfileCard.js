import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    
    <View style={ styles.container }>
        <View style={styles.card}>
            <Image 
                source={{
                    uri:"https://cdn-prod.scalefast.com/public/assets/img/resized/wizardsofthecoast-secret-lair/15d488f366cfe064f6b3bcc3c93de85e_KR_636_Q90.webp",
                }}
                style = {styles.image}
            />

            <Text style={ styles.name }>Mr. Wilmoth</Text>
            <Text style={ styles.bio }>
                Write a short bio about yourself...
            </Text>
        </View>
    </View>
  )
}

export default ProfileCard
const image_width = 240
const styles = StyleSheet.create({
    container : {
        flex:.5,
        backgroundColor:"#f0f",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: "80%",
        backgroundColor: "#f00",
        padding: 20,
        borderRadius: 15,
    },
    name: {
        fontSize: 24
    },
    bio: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
    },
    image:{
        
        width: image_width,
        height: image_width,
        borderRadius: image_width/2, //
        borderWidth: 3,
        borderColor: "#4CAF50",
    }

})