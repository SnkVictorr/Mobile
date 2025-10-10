import Nubank from "@/src/models/Nubank";
import PagSeguro from "@/src/models/PagSeguro";
import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

const FormBanco: React.FC = () => {
  // UseState para colocar os valores dos inputs
  // Interação do usuário com o estado da página (Interatividade)
  // UseState muda conforme o usuário faz ações
  const [pixCredito, setPixCredito] = React.useState<number>(0);
  const [criptomoeda, setCriptomoeda] = React.useState<number>(0);
  const [debito, setDebito] = React.useState<number>(0);
  const [credito, setCredito] = React.useState<number>(0);
  const [saque, setSaque] = React.useState<number>(0);
  const [deposito, setDeposito] = React.useState<number>(0);
  const [saldo, setSaldo] = React.useState<number>(0);
  const [tipoBanco, setTipoBanco] = React.useState<string>("");

  const [mensagem, setMensagem] = React.useState<string>("");

  const pagar = () => {
    let banco;
    if (tipoBanco === "Nubank") {
      banco = new Nubank(saque, deposito, saldo, criptomoeda, pixCredito);
    } else if (tipoBanco === "PagSeguro") {
      banco = new PagSeguro(saque, deposito, saldo, credito, debito);
    }
    if (banco) {
      setMensagem(banco.Pagar());
    }
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
        Banco
      </Text>
      <Title TitleName="depósito" />
      <Input
        InputName="Faça seu Depósito"
        value={deposito.toString()}
        onChangeText={(text) => setDeposito(Number(text))}
      />
      <Title TitleName="Saque" />
      <Input
        InputName="Digite seu Saque"
        value={saque.toString()}
        onChangeText={(text) => setSaque(Number(text))}
      />
      <Title TitleName="Banco" />
      <Input
        InputName="Digite seu Banco (Nubank ou PagSeguro)"
        value={tipoBanco}
        onChangeText={(text) => setTipoBanco(text)}
      />
      <Title TitleName="Criptomoeda (Nubank)" />

      <Input
        InputName="Digite o valor da Criptomoeda"
        value={criptomoeda.toString()}
        onChangeText={(text) => setCriptomoeda(Number(text))}
      />

      <Title TitleName="Pix Crédito (Nubank)" />
      <Input
        InputName="Digite o valor do Pix Crédito"
        value={pixCredito.toString()}
        onChangeText={(text) => setPixCredito(Number(text))}
      />

      <Title TitleName="Crédito (PagSeguro)" />
      <Input
        InputName="Digite o valor do Crédito"
        value={credito.toString()}
        onChangeText={(text) => setCredito(Number(text))}
      />
      <Title TitleName="Débito (PagSeguro)" />
      <Input
        InputName="Digite o valor do Débito"
        value={debito.toString()}
        onChangeText={(text) => setDebito(Number(text))}
      />

      <Button ButtonName="Aperte" ButtonColor="orange" onPress={pagar} />

      {mensagem !== null && <Text style={{ fontSize: 18 }}>{mensagem}</Text>}
    </View>
  );
};

export default FormBanco;
