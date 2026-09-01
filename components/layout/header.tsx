import { useColor } from "@/hooks/colorProvider";
import { colorType } from "@/types/color";
import { StyleSheet, Text, View } from "react-native";
import GoLiftText from "../ui/GoLiftText";

export default function PrimaryHeader({
    variant = "onboard",
    title,
}: {
    variant: "onboard" | "main";
    title?: string;
}) {
    const { colors } = useColor();

    const styles = createStyles(colors);

    return (
        <View
            style={
                variant === "main"
                    ? styles.mainHeader
                    : styles.onboardHeader
            }
        >
            <GoLiftText
                fontSize={22}
                backgroundShown
            />

            <Text
                style={
                    variant === "main"
                        ? styles.mainHeaderTitle
                        : styles.onboardHeaderTitle
                }
            >
                {title}
            </Text>
        </View>
    );
}

const createStyles = (colors: colorType) =>
    StyleSheet.create({
        mainHeader: {
            display: "flex",
            gap: 4,
            padding: 10,
            alignItems: "center",
            flexDirection: "row",

            top: 0,
            height: 60,

            backgroundColor: colors.background,

            borderBottomWidth: 1,
            borderBottomColor: colors.background,
        },

        mainHeaderTitle: {
            color: colors.textPrimary,
            fontSize: 18,
            fontWeight: "bold",
        },

        // =========================
        // ONBOARD
        // =========================
        onboardHeader: {
            gap: 8,
            padding: 15,
            alignItems: "center",
            flexDirection: "row",

            top: 0,
            height: 80,
        },

        onboardHeaderTitle: {
            color: colors.textPrimary,
            fontSize: 18,
            fontWeight: "bold",
        },
    });