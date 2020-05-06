import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';

import logoImg from "../../assets/logo.png";
import styles from './styles';

export default function Detail() {
  const message = 'Olá APAD, estou entradando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$120,00.';

  /* 
    expo install expo-mail-composer: instalação

    MailComposer.composeAsync: Utilizado para abrir a comunicaçãodo email no app
                      subject: Título do email
                   recipients: O email/array de emails cadastrado para recebimento de 'emails' 
                         body: corpo da mensagem que será enviada 
  */
  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['diego@rocketseat.com.br'],
      body: message,
    });
  };

  /* 

    import { Linking } from 'react-native' : instalação
    
    Linking.openURL: gera um link com o app do wpp, passando uma URL de comunicação
              phone: Tem que ser completo com numero do pais +55, DDD e numero do celular do usuario
              text: Mensagem a ser enviada para o usuario  
  
  */
  function sendWhatsapp() {
    //numero do telefone
    let number = '558586426055';
    Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`);
  };


  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={logoImg} />

        <TouchableOpacity
          onPress={() => { }}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={sendWhatsapp}
          >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={sendMail}
          >
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
