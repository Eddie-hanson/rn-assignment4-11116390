import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("Edward");
  const [email, setEmail] = useState("hand18edward@gmail.com");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Headerstyle}>Jobizz</Text>
      </View>
      <View style={styles.group46}>
        <Text style={styles.intro}>Welcome Back👋</Text>
        <Text style={styles.Headline}>Let's Log in. Apply for jobs!</Text>
      </View>
      <View style={styles.group49}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={apple} style={styles.socials} />
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <Icon name="google" size={40} color="#DB4437" /> */}
          <Image source={google} style={styles.socials} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={facebook} style={styles.socials} />
        </TouchableOpacity>
      </View>
      <View style={styles.footercontainer}>
        <Text style={styles.footer}>
          Haven't an account ? <Text style={styles.footer1}> Register</Text>{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    width: 375,
    top: 38,
    height: 812,
  },
  Header: {
    width: 150,
    height: 33,
    top: -176,
    left: -16,
  },
  Headerstyle: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 33,
    textAlign: "center",
    color: "#356899",
  },
  group46: {
    width: 207,
    height: 63,
    top: -147,
    marginHorizontal: 10,
    gap: 0,
  },

  intro: {
    fontFamily: "Poppins-Bold",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 33.6,
    Letter: -0.015,
    color: "#0D0D26",
  },
  Headline: {
    fontFamily: "Poppins-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 22.4,
    Letter: -1,

    opacity: 0.3,
  },
  group49: {
    width: 328,
    height: 150,
    top: -71,
    marginHorizontal: 10,
    marginTop: -30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
    width: 327,
    height: 52,
    Top: 329,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#356899",
    width: 327,
    height: 52,
    marginTop: 30,
    borderRadius: 6,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginTop: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",

    borderWidth: 1,
    borderRadius: 1,
    opacity: 0.3,
  },
  separatorText: {
    marginHorizontal: 10,
    fontFamily: "Poppins-Regular",
    opacity: 0.3,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footercontainer: {
    opacity: 0.4,
    justifyContent: "center",
  },
  socials: {
    width: 56,
    height: 56,
    borderRadius: 25,
  },
  footer: {
    marginTop: 40,

    marginBottom: -120,
    textAlign: "center",
    Weight: 400,
    fontSize: 14,
    lineHeight: 17.71,
  },
  footer1: {
    color: "#000033",
    Weight: 400,
    fontSize: 14,
    lineHeight: 17.71,
  },
});

export default LoginScreen;
