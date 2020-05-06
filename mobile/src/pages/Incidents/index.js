import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  /* 
    useEffect: função chamada quando algo é mudado de estado,
    nesse caso executa a função load quando o component é montado
  */
  useEffect(() => {
    loadIncidents();
  }, []);


  /* 
    fazer uma função inicial para ser chamada na construção do components react-native
  
  */

  async function loadIncidents() {
    const response = await api.get('incidents');
    setIncidents(response.data);
    setTotal(response.headers['x-total-count']);
  };


  return (
    <View style={styles.container} >

      <View style={styles.header}>

        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>

      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      {/* 
        FlatList: usado para listar dados no react native
            data: é os dados em formato de array usado para listar
            keyExtractor: chave única de cada dado, usado para indentificar na listagem, sempre converter em String
            renderItem: função usada para mostrar como o conteudo irá ser apresentado na lisatgem
            showsVerticalScrollIndicator: mostrar indicador/barrinha de rolagem do conteúdo
      
      */}

      <FlatList
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {
                Intl.NumberFormat('pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL'
                  })
                  .format(incident.value)
              }
            </Text>


            {/* 
            
              TouchableOpacity: Botão default para possíveis estilizações
              onPress: Função chamada quando se clica no botão
            
            */}
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => { }}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>

              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />


    </View>
  );
}
