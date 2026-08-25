import { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text
} from "react-native";

export default function SharedSelect({
    placeholder = "",
    values = [],
    onSelect,
    selected,
}: {
    placeholder?: string;
    values: any[];
    onSelect: (selected: any) => void;
    selected: any
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Select box */}
            <Pressable
                style={({ pressed }) => [
                    style.selectBox,
                    pressed && style.selectBoxPressed,
                ]}
                onPress={() => setIsOpen(true)}
            >
                <Text style={style.selectText}>
                    {selected ? selected : `-- Chọn${" "}${placeholder !== "" ? placeholder : "nhiều giá trị"}${" "}--`}
                </Text>

                <Text style={style.arrow}></Text>
            </Pressable>

            {/* Modal */}
            <Modal
                visible={isOpen}
                transparent
                animationType="fade"
                onRequestClose={() => setIsOpen(false)}
            >
                <Pressable
                    style={style.overlay}
                    onPress={() => setIsOpen(false)}
                >
                    {/* Prevent modal body from closing */}
                    <Pressable style={style.modalBody}>
                        <Text style={style.modalTitle}>
                            Chọn {placeholder || "giá trị"}
                        </Text>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={style.list}
                        >
                            {values.map((value) => (
                                <Pressable
                                    key={String(value)}
                                    style={({ pressed }) => [
                                        style.item,
                                        pressed && style.itemPressed,
                                    ]}
                                    onPress={() => {
                                        onSelect(value);
                                        setIsOpen(false);
                                    }}
                                >
                                    <Text style={style.itemText}>
                                        {value}
                                    </Text>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    );
}

const style = StyleSheet.create({
    selectBox: {
        width: "100%",
        height: 52,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#2A2A2A",
        borderRadius: 14,
    },

    selectBoxPressed: {
        opacity: 0.8,
    },

    selectText: {
        fontSize: 16,
        color: "#444",
    },

    arrow: {
        fontSize: 20,
        color: "#555",
        marginTop: -5,
    },

    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000080",
    },
    modalBody: {
        width: "82%",
        maxHeight: "65%",
        backgroundColor: "#181818",
        borderRadius: 24,
        paddingTop: 20,
        paddingBottom: 10,
        overflow: "hidden",
        elevation: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        marginBottom: 12,
    },
    list: {
        paddingHorizontal: 12,
        paddingBottom: 8,
    },
    item: {
        minHeight: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
    },
    itemPressed: {
        backgroundColor: "#cc471f",
    },
    itemText: {
        fontSize: 16,
        color: "#fff",
    },
});