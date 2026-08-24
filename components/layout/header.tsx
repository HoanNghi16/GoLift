import { StyleSheet, Text, View } from "react-native";
import GoLiftText from "../ui/GoLiftText";

export default function PrimaryHeader({variant="onboard", title}:{variant: "onboard" | "main", title?: string}){
    const style = variant === "main" ? main : onboard
    return (
        <View style={style.primaryHeader}>
            <GoLiftText fontSize={22} backgroundShown/>
            <Text style={style.headerTitle}>{title}</Text>
        </View>
    )
}

const main = StyleSheet.create({
    primaryHeader: {
        display: "flex",
        gap: 4,
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
        top: 0,
        backgroundColor: '#00000045',
        height: 60,
    },
    heaederLogo:{
        width: 50,
        borderRadius: 10,
        height: 50,
    },
    headerTitle:{}
})
const onboard = StyleSheet.create({
    primaryHeader: {
        gap: 8,
        padding: 15,
        alignItems: "center",
        flexDirection: "row",
        top: 0,
        height: 80,
    },
    heaederLogo:{
        width: 50,
        borderRadius: 10,
        height: 50,
    },
    headerTitle:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})