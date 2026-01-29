import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const IMAGE_SIZE = width / 3 - 16;

export default function MemoriasScreen() {
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const fotos = [
    require('../../assets/images/foto1.jpg'),
    require('../../assets/images/foto2.jpg'),
    require('../../assets/images/foto3.jpg'),
    require('../../assets/images/foto4.jpg'),
    require('../../assets/images/foto5.jpg'),
    require('../../assets/images/foto6.jpg'),
    require('../../assets/images/foto7.jpg'),
    require('../../assets/images/foto8.jpg'),
    require('../../assets/images/foto9.jpg'),
    require('../../assets/images/foto10.jpg'),
    require('../../assets/images/foto11.jpg'),
    require('../../assets/images/foto12.jpg'),
    require('../../assets/images/foto13.jpg'),
    require('../../assets/images/foto14.jpg'),
    require('../../assets/images/foto15.jpg'),
    require('../../assets/images/foto16.jpg'),
    require('../../assets/images/foto17.jpg'),
    require('../../assets/images/foto18.jpg'),
    require('../../assets/images/foto19.jpg'),
    require('../../assets/images/foto20.jpg'),
    require('../../assets/images/fotovorose.jpg'),
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Título */}
      <Text style={styles.title}>Memórias para se lembrar 💖</Text>
      <Text style={styles.subtitle}>
        Momentos guardados com carinho
      </Text>

      {/* Galeria */}
      <FlatList
        data={fotos}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.gallery}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setFotoSelecionada(item)}
          >
            <Image source={item} style={styles.image} />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal da imagem */}
      <Modal visible={!!fotoSelecionada} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setFotoSelecionada(null)}
          activeOpacity={1}
        >
          <Image source={fotoSelecionada} style={styles.fullImage} />
          <Text style={styles.closeText}>Toque para fechar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginBottom: 15,
  },
  gallery: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 6,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: width * 0.95,
    height: height * 0.75,
    resizeMode: 'contain',
  },
  closeText: {
    marginTop: 20,
    color: '#FFF',
    fontSize: 14,
    opacity: 0.8,
  },
});
