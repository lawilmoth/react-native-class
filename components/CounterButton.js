import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'

const CounterButton = () => {

  const [count, setCount] = useState(0)
  return (
    <TouchableOpacity style={styles.button} onPress={()=>{setCount(count+1)}}>
      <Text style = {styles.text}>Count: {count}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#b000b5",
        height: 100,
        width:300,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        borderRadius: 10,
        boxShadow: "10px 10px 10px black",
        

    },
    text: {
        fontSize: 24,
    }
})

export default CounterButton