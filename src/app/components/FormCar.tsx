import Carro from "@/src/models/Carro";
import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

const FormLogin: React.FC = () => {
  // UseState para colocar os valores dos inputs
  // Interação do usuário com o estado da página (Interatividade)
  // UseState muda conforme o usuário faz ações
  const [marca, setMarca] = React.useState<string>("");
  const [modelo, setModelo] = React.useState<string>("");
  const [numeroPortas, setNumeroPortas] = React.useState<number>(0);
  const [mensagem, setMensagem] = React.useState<string>("");

  const onPressExibir = () => {
    const _carro = new Carro(0, marca, modelo, numeroPortas);
    // setResult(_usuario.loginUsuario());

    // Get
    _carro.numeroPortas = numeroPortas;
    // Set
    setMensagem(_carro.buzinar() + " - " + _carro.numeroPortas + " portas");
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
      <Title TitleName="Marca" />
      <Input
        InputName="Digite sua Marca de Carro"
        value={marca}
        onChangeText={(text) => setMarca(text)}
      />
      <Title TitleName="Modelo" />
      <Input
        InputName="Digite seu Modelo de Carro"
        value={modelo}
        onChangeText={(text) => setModelo(text)}
      />
      <Title TitleName="Número de Portas" />
      <Input
        InputName="Digite o Número de Portas"
        value={numeroPortas.toString()}
        onChangeText={(text) => setNumeroPortas(Number(text))}
      />

      <Button
        ButtonName="Exibir"
        ButtonColor="orange"
        onPress={onPressExibir}
      />

      {mensagem !== null && <Text style={{ fontSize: 18 }}>{mensagem}</Text>}
    </View>
  );
};

export default FormLogin;
