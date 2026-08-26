import { useColor } from "@/hooks/colorProvider";
import { colorType } from "@/types/color";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    const { colors } = useColor();

    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.background}
            />

            {/* Nội dung màn hình */}
            <View style={styles.content}>
                <Text style={styles.title}>
                    App đầu tiên của bố, ahahahahahaha
                </Text>

                <Text style={styles.subtitle}>
                    Ghi chú và nhắc lịch tập của bạn
                </Text>
            </View>
        </View>
    );
}

const createStyles = (colors: colorType) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },

        header: {
            paddingTop: 60,
            paddingBottom: 20,
            paddingHorizontal: 24,
            backgroundColor: colors.surface,
            borderBottomWidth: 1,
            borderBottomColor: colors.primary,
        },

        headerText: {
            fontSize: 28,
            fontWeight: "700",
            color: colors.textPrimary,
            letterSpacing: 0.5,
        },

        headerAccent: {
            color: colors.primaryText,
        },

        content: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 24,
        },

        title: {
            color: colors.textPrimary,
            fontSize: 22,
            fontWeight: "600",
            textAlign: "center",
            marginBottom: 8,
        },

        subtitle: {
            color: colors.textSecondary,
            fontSize: 15,
            textAlign: "center",
        },
    });