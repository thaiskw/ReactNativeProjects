import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreVoceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre você 🩷</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Nascida em 29 de janeiro de 1985, na cidade de Itu, Fabiana sempre fez
          questão de registrar cada conquista ao longo da sua trajetória.
        </Text>

        <Text style={styles.text}>
          Sua infância foi marcada por pais amorosos e irmãs meio doidas — mas
          que sempre estiveram ao seu lado, com muito amor. Viveu sua
          pré-adolescência na escola particular SESI e concluiu os últimos anos
          escolares na escola pública Pery.
        </Text>

        <Text style={styles.text}>
          Casou-se aos 23 anos com seu esposo Sandro. O que começou como uma vida
          a dois logo se transformou em uma família maior: primeiro três, depois
          quatro e, por fim, cinco membros oficiais — incluindo sua única filha
          e seus fiéis companheiros de quatro patas.
        </Text>

        <Text style={styles.text}>
          Atualmente, trabalha no Hospital Santa Ignes como auxiliar de farmácia,
          área em que vem acumulando experiência há muitos anos. Ao longo da
          vida, enfrentou diversas dificuldades, mas nunca deixou de seguir em
          frente, sempre forte, resiliente e determinada.
        </Text>
      </View>

      <Text style={styles.footer}>Produzido por Thainá💫</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF5F8',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E91E63',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 15,
    textAlign: 'justify',
  },
  footer: {
    marginTop: 30,
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
  },
});
