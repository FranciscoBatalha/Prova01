import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { Link } from "expo-router";
import React, { useState } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');

  const salvarDados = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('CPF:', cpf);
  };

  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/819ue6coZLL.jpg')} style={styles.image} />
      <Text style={styles.appName}>BSAA REGISTROS</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
          onPress={salvarDados}
          color="#808080"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          onPress={() => console.log('Botão Voltar pressionado')}
          color="#808080"
        />
      </View>
      <Link href="/telaSobre">Voltar para Sobre</Link>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#000000',
    borderRadius: 4,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Formulario;