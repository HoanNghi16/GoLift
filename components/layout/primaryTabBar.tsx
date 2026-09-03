import { useColor } from "@/hooks/colorProvider";
import { colorType } from "@/types/color";
import { StyleSheet, View } from "react-native";



export default function PrimaryTabBar(){
    const {colors} = useColor()
    const styles = styleSheet(colors)
    return (
        <View style={styles.tabContainer}>
            <View></View>
        </View>
    )
}

const styleSheet = (colors: colorType)=>{
    return StyleSheet.create({
        tabContainer:{
            flexDirection: 'row',
            width: '100%',
            backgroundColor: colors.background,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }
    })
}