import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={style.View}>
      <Text style={style.Text}>App đầu tiền của bố, ahahahahahaha</Text>
    </View>
  );
}

const style = StyleSheet.create({
  View:{
    backgroundColor: '#000'
  },
  Text:{
    color: '#fff',
    fontSize:50,
    display:'flex',
  }
})