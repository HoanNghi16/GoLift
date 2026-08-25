import { GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native"

export default function SharedButton({variant, title, onPress}:{variant: "orange" | 'dark', title: string, onPress: (e:GestureResponderEvent)=>void}){
    return (
        <Pressable 
            onPress={(e)=>onPress(e)}
            style={style[variant]}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:'#fff'}}>{title}</Text>
        </Pressable>
    )
}
const style = StyleSheet.create({
    orange:{
        backgroundColor: "#cc471f",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
    ,dark :{
        backgroundColor: "#2b2b2b",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})