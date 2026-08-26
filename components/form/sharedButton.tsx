import { useColor } from "@/hooks/colorProvider";
import { colorType } from "@/types/color";
import {
    GestureResponderEvent,
    Pressable,
    StyleSheet,
    Text,
} from "react-native";

export default function SharedButton({
    title,
    onPress,
}: {
    title: string;
    onPress: (e: GestureResponderEvent) => void;
}) {
    const { colors } = useColor();

    const styles = createStyles(colors);

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.button,styles.dark,
            ]}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    );
}

const createStyles = (colors: colorType) =>
    StyleSheet.create({
        button: {
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
        },

        dark: {
            backgroundColor: colors.primary,
        },

        text: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.textPrimary,
        },
    });