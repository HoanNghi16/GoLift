import PrimaryHeader from "@/components/layout/header";
import SharedInput from "@/components/ui/sharedInput";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function StartProfile() {
    return (
        <View style={style.startCont}>
            <PrimaryHeader
                title="Cấu hình hồ sơ"
                variant="onboard"
            />

            <View style={style.mainContent}>
                {/* Logo */}
                <Image
                    style={style.logo}
                    source={require("@/assets/images/GoLift_logo.png")}
                />

                {/* Form */}
                <View style={style.formView}>
                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={style.formContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Nickname */}
                        <View style={style.inputWrapper}>
                            <Text style={style.inputDescription}>
                                GoLift nên gọi bạn là gì?
                            </Text>

                            <SharedInput
                                placeholder="Tên hoặc biệt danh của bạn"
                            />
                        </View>

                        {/* Birth year */}
                        <View style={style.inputWrapper}>
                            <Text style={style.inputDescription}>
                                Bạn sinh năm bao nhiêu?
                            </Text>

                            <SharedInput
                                placeholder="Ví dụ: 2005"
                                keyboardType="number-pad"
                                maxLength={4}
                            />
                        </View>

                        {/* Gender */}
                        <View style={style.inputWrapper}>
                            <Text style={style.inputDescription}>
                                Giới tính của bạn?
                            </Text>

                            <SharedInput
                                placeholder="Nam / Nữ / Khác"
                            />
                        </View>

                        {/* Height */}
                        <View style={style.inputWrapper}>
                            <Text style={style.inputDescription}>
                                Chiều cao của bạn là bao nhiêu?
                            </Text>

                            <SharedInput
                                placeholder="Ví dụ: 180 cm"
                                keyboardType="numeric"
                            />
                        </View>

                        {/* Weight */}
                        <View style={style.inputWrapper}>
                            <Text style={style.inputDescription}>
                                Cân nặng hiện tại của bạn?
                            </Text>

                            <SharedInput
                                placeholder="Ví dụ: 80 kg"
                                keyboardType="decimal-pad"
                            />
                        </View>

                        {/* Goal */}
                        <View style={style.inputWrapper}>
                            <Text style={style.inputDescription}>
                                Mục tiêu tập luyện của bạn là gì?
                            </Text>

                            <SharedInput
                                placeholder="Tăng cơ, giảm mỡ..."
                            />
                        </View>

                        {/* Experience */}
                        <View style={style.inputWrapper}>
                            <Text style={style.inputDescription}>
                                Bạn đã tập gym được bao lâu?
                            </Text>

                            <SharedInput
                                placeholder="Ví dụ: 1 năm"
                            />
                        </View>
                    </ScrollView>
                    <Pressable style={style.continue}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color:'#fff'}}>Tiếp tục</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    startCont: {
        flex: 1,
        backgroundColor: "#cc471f",
    },

    mainContent: {
        flex: 1,
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 30,
        alignSelf: "center",
    },

    formView: {
        flex: 1,
        backgroundColor: "#000000b5",
        paddingHorizontal: 30,
        paddingTop: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
        overflow: "hidden",
    },

    formContent: {
        gap: 24,
        paddingBottom: 40,
    },

    inputWrapper: {
        gap: 7,
    },

    inputDescription: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "600",
    },
    continue: {
        backgroundColor: "#cc471f",
        marginBottom: 20,
        marginTop: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
});