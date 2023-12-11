import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { useSetRecoilState } from "recoil";
import loginApi from "../../services/login";
import { userState } from "../../recoil/atoms/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const setUser = useSetRecoilState(userState);

  const login = async () => {
    console.log("eeee");
    try {
      const data = await loginApi.login(email, password);
      console.log(data);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      setEmail("");
      setPassword("");
      setErrorMsg(null);
      // await SecureStore.setItemAsync('access', data.access);
      navigation.goBack();
    } catch (error) {
      setUser({ loggedIn: false, access: null, refresh: null });
      setErrorMsg("Usuário ou senha inválidos!");
      await SecureStore.deleteItemAsync("access");
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.formLogin}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.formLoginText}>Faça login para continuar</Text>
        <TextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Senha"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Button mode="contained" onPress={() => login()} style={styles.button}>
          Entrar
        </Button>
        <Text style={styles.errorText}>{errorMsg}</Text>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formLogin: {
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
    marginVertical: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
    marginBottom: 15,
  },
  formLoginText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#f72585",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 0,
    marginVertical: 20,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
  link: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
