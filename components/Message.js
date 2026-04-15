import { View, Text, StyleSheet } from 'react-native'

export default function MessageBubble ({message}) {
    return(
        <View style={[styles.bubble, styles.me]}>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bubble: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#e5e5ea',
        marginVertical: 4,
        marginHorizontal: 10,
        maxWidth: "70%",
    },
    text : {
        fontSize:  16,
    },
    me : {
        alignSelf: 'flex-end',
    }
})