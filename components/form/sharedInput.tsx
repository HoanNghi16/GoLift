import { useState } from "react";
import {
    StyleSheet,
    TextInput,
    TextInputProps
} from "react-native";

export default function SharedInput(props: TextInputProps) {
    const [focused, setFocused] = useState(false);

    return (
            <TextInput
                {...props}
                style={[
                    styles.input,
                    focused && styles.inputFocused,
                ]}
                placeholderTextColor="#777"
                onFocus={(e) => {
                    setFocused(true);
                    props.onFocus?.(e);
                }}
                onBlur={(e) => {
                    setFocused(false);
                    props.onBlur?.(e);
                }}
            />
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        display: 'flex',
    },
    input: {
        width: "100%",
        height: 52,

        backgroundColor: "#fff",

        borderWidth: 1,
        borderColor: "#2A2A2A",
        borderRadius: 14,

        paddingHorizontal: 16,

        color: "#000",
        fontSize: 16,
    },

    inputFocused: {
        borderColor: "#000000",
        backgroundColor: "#fff",
    },
});