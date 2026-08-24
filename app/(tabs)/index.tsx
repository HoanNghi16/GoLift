import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

// Bảng màu chủ đạo của app — để đây cho dễ tái sử dụng ở màn hình khác
const COLORS = {
  background: "#0d0d0d",   // đen chủ đạo
  surface: "#1a1a1a",      // đen nhạt hơn 1 chút, dùng cho card/section
  primary: "#c2410c",      // cam tối (đậm)
  primaryText: "#ea580c",  // cam tối nhưng sáng hơn 1 chút, dùng cho chữ nhấn
  textPrimary: "#ffffff",
  textSecondary: "#9a9a9a",
};

export default function HomeScreen() {
  useEffect(() => {
    const checkOnboarding = async () => {
        const profile = await AsyncStorage.getItem('profile');

        console.log('PROFILE:', profile);

        if (profile) {
        router.replace('/(tabs)');
        } else {
        router.replace('/onboarding');
        }
    };

    checkOnboarding();
    }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Go<Text style={styles.headerAccent}>Lift</Text>
        </Text>
      </View>

      {/* Nội dung màn hình */}
      <View style={styles.content}>
        <Text style={styles.title}>App đầu tiên của bố, ahahahahahaha</Text>
        <Text style={styles.subtitle}>Ghi chú và nhắc lịch tập của bạn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textPrimary,
    letterSpacing: 0.5,
  },
  headerAccent: {
    color: COLORS.primaryText,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 15,
    textAlign: "center",
  },
});