import React, { useState } from "react";
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const mudarLogin = () => {
        console.loh(`Logar com o email: ${email} e senha:`);
    };

    return (
       <View style={styles.container}>
        <Text style={styles.cabecalho}>Bem-vindo!</Text>
        <TextInput
            style={styles.input}
            placeholder="Digite seu Email@.com"
            value={email}
            onChangeText={(Text) => setEmail(Text)}
        />


        <Button title="Entrar" onPress={mudarLogin}/>
       </View>
    );
};

const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     },

     input: {
        width: '60%',
        padding: 20,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'gray',
     },
    
     cabecalho: {
        fontsize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
     }

});

export default Login;