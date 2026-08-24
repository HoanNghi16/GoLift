import { StyleSheet, Text, View } from "react-native";

export default function GoLiftText({backgroundShown=false, fontSize = 20}:{backgroundShown?: boolean, fontSize?: number}){
    const opitonal = backgroundShown ? style.OptionalContainer : {}
    if (backgroundShown){
        return (
            <View style={{...opitonal, flexDirection: 'row'}}>
                <Text style={{...style.Go, fontSize}}>Go</Text><Text style={{...style.Lift, fontSize}}>Lift</Text>
            </View>
        )
    }
    return (
        <Text style={{ flexDirection: 'row'}}>
            <Text style={{...style.Go, fontSize}}>Go</Text><Text style={{...style.Lift, fontSize}}>Lift</Text>
        </Text>
    )
}
const style = StyleSheet.create({
    OptionalContainer: {
        padding: 5,
        backgroundColor: '#fffefe',
        borderRadius: 10,
    },
    Go: {
        fontFamily: 'Arial',
        fontWeight:'bold',
        color: '#1f1d1d'
    },
    Lift:{
        fontFamily: 'Arial',
        fontWeight:'bold',
        color: '#ea580c'
    }
})