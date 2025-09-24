import Administrador from "@/src/models/Adminstrador";
import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";


const FormUser: React.FC = () => {
  // UseState para colocar os valores dos inputs
  // Interação do usuário com o estado da página (Interatividade)
  // UseState muda conforme o usuário faz ações
  const [email, setEmail] = React.useState<string>("");
  const [senha, setSenha] = React.useState<string>("");
  const [nome, setNome] = React.useState<string>("");
  const [cargo, setCargo] = React.useState<string>("");

  const [mensagem, setMensagem] = React.useState<string>("");

  const exibirMensagem = () => {
    const _adm = new Administrador(1, nome, email, senha, mensagem, cargo);

    setMensagem(_adm.exibirMsg());
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
      <Title TitleName="Digite seu Cargo" />
      <Input
        InputName="Digite seu Cargo"
        value={mensagem}
        onChangeText={(text) => setCargo(text)}
      />
      <Button
        ButtonName="Aperte"
        ButtonColor="orange"
        onPress={exibirMensagem}
      />

      {mensagem !== null && <Text style={{ fontSize: 18 }}>{mensagem}</Text>}
    </View>
  );
};

export default FormUser;
