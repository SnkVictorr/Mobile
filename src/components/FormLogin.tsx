import Usuario from "@/src/models/Usuario";
import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

const FormLogin: React.FC = () => {
  // UseState para colocar os valores dos inputs
  // Interação do usuário com o estado da página (Interatividade)
  // UseState muda conforme o usuário faz ações
  const [email, setEmail] = React.useState<string>("");
  const [senha, setSenha] = React.useState<string>("");
  const [nome, setNome] = React.useState<string>("");
  const [mensagem, setMensagem] = React.useState<string>("");
  const [result, setResult] = React.useState<string | null>(null);

  const onPressLogin = () => {
    const _usuario = new Usuario(1, nome, email, senha, mensagem);
    // setResult(_usuario.loginUsuario());
    setResult(_usuario.exibirMsg() + " - " + _usuario.exibirPerfil());
  };
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          alignSelf: "center",
        }}
      >
        Login
      </Text>
      <Title TitleName="Nome" />
      <Input
        InputName="Digite seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Title TitleName="Email" />
      <Input
        InputName="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Title TitleName="Digite sua senha" />
      <Input
        InputName="Digite sua Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <Title TitleName="Digite sua mensagem" />
      <Input
        InputName="Digite sua Mensagem"
        value={mensagem}
        onChangeText={(text) => setMensagem(text)}
      />
      <Button ButtonName="Login" ButtonColor="orange" onPress={onPressLogin} />

      {result !== null && <Text style={{ fontSize: 18 }}>{result}</Text>}
    </View>
  );
};

export default FormLogin;
