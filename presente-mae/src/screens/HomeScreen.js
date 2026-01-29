import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const NOME_CORRETO = 'Fabiana';
  const SENHA_CORRETA = '1985';

  function verificarAcesso() {
    if (nome === NOME_CORRETO && senha === SENHA_CORRETA) {
      setModalVisible(false);
      setNome('');
      setSenha('');
      navigation.navigate('Menu');
    } else {
      Alert.alert(
        'Acesso Negado ❌',
        'Esse presente é só para a aniversariante 🎂'
      );
    }
  }

  return (
    <View style={styles.container}>
      {/* Imagem principal */}
      <Image
        source={require('../../assets/images/feliz-aniversario.png')}
        style={styles.image}
      />

      {/* Texto */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tenho um presente pra você!!!</Text>
      </View>

      {/* Botão abrir presente */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Abrir presente 🎁</Text>
      </TouchableOpacity>

      {/* Modal de verificação */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            {/* Sticker / imagem de aviso */}
            <Image
              source={require('../../assets/images/danger.png')}
              style={styles.sticker}
            />

            {/* Título */}
            <Text style={styles.modalTitle}>
              Você realmente é a aniversariante? 🎂
            </Text>

            {/* Input nome */}
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
            <Text style={styles.hintText}>(nome da aniversariante)</Text>

            {/* Input senha */}
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <Text style={styles.hintText}>(ano de nascimento da aniversariante)</Text>

            {/* Botão confirmar */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={verificarAcesso}
            >
              <Text style={styles.confirmText}>Entrar</Text>
            </TouchableOpacity>

            {/* Botão cancelar */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: '#FFE4EC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    color: '#C2185B',
    letterSpacing: 1,
  },
  button: {
    backgroundColor: '#E91E63',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* Modal */
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFF',
    width: '100%',
    maxWidth: 350,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  sticker: {
    width: 80,
    height: 80,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E91E63',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 12,
    marginBottom: 5,
  },
  hintText: {
    alignSelf: 'flex-start',
    color: '#999',
    fontSize: 12,
    marginBottom: 12,
    marginLeft: 4,
  },
  confirmButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 14,
    marginTop: 10,
  },
  confirmText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    marginTop: 15,
    color: '#999',
  },
});
