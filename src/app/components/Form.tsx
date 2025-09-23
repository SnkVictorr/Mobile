import { Text, View } from "react-native";
import React, { Component, useState } from "react";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import Calculadora from "@/src/models/Calculadora";
import { SafeAreaView } from "react-native-safe-area-context";

const Form: React.FC = () => {
  // UseState para colocar os valores dos inputs
  // Interação do usuário com o estado da página (Interatividade)
  // UseState muda conforme o usuário faz ações
  const [num1, setNum1] = React.useState<number>(0);
  const [num2, setNum2] = React.useState<number>(0);
  const [result, setResult] = React.useState<number | null>(null);

  // Método para somar dois números

  const onPressSum = () => {
    // Chamar o método somar() da classe Calculadora
    // new = instanciar(Criar Objeto)
    const _calculadora = new Calculadora(num1, num2);
    setResult(_calculadora.somar());
  };

  const onPressSub = () => {
    // Chamar o método subtrair() da classe Calculadora
    // new = instanciar(Criar Objeto)
    const _calculadora = new Calculadora(num1, num2);
    setResult(_calculadora.subtrair());
  };

  const onPressMul = () => {
    // Chamar o método multiplicar() da classe Calculadora
    // new = instanciar(Criar Objeto)
    const _calculadora = new Calculadora(num1, num2);
    setResult(_calculadora.multiplicar());
  };

  const onPressDiv = () => {
    // Chamar o método multiplicar() da classe Calculadora
    // new = instanciar(Criar Objeto)
    const _calculadora = new Calculadora(num1, num2);
    setResult(_calculadora.dividir());
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          alignSelf: "center",
        }}
      >
        Calculadora
      </Text>
      <Title TitleName="Digite o número 1" />
      <Input
        InputName="Número 1"
        value={num1.toString()}
        onChangeText={(text) => setNum1(Number(text))}
      />
      <Title TitleName="Digite o número 2" />
      <Input
        InputName="Número 2"
        value={num2.toString()}
        onChangeText={(text) => setNum2(Number(text))}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button ButtonName="/" ButtonColor="orange" onPress={onPressDiv} />
        <Button ButtonName="*" ButtonColor="green" onPress={onPressMul} />
        <Button ButtonName="-" ButtonColor="red" onPress={onPressSub} />
        <Button ButtonName="+" ButtonColor="blue" onPress={onPressSum} />
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {result !== null && (
          <Text style={{ fontSize: 18 }}>Resultado: {result}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Form;
