import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Avatar, Button, List, Dialog, Portal, PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function Perfil() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);


  const usuario = {
    nombre: "Jailyn Pérez",
    email: "jailyn.perez@email.com",
    telefono: "3001234567",
    direccion: "Cra 1 #23-45, Quibdó",
  };

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleLogout = () => {

    hideDialog();
    alert('Sesión cerrada');
    router.push('/');
  };

  return (
    <PaperProvider>
      <Stack.Screen options={{
        title: 'Perfil de Usuario',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>

          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <Avatar.Image
              size={150}
              source={require('../../assets/img/anny.png')}
              style={styles.avatar}
            />
          </View>

          <Text variant="headlineMedium" style={styles.name}>
            {usuario.nombre}
          </Text>

          <View style={{ width: '100%', gap: 10, marginBottom: 20 }}>
            <View style={styles.listItem}>
              <List.Item
                title={`Correo: ${usuario.email}`}
                left={props => <List.Icon {...props} icon="email" color="#c898b6" />}
              />
            </View>
            <View style={styles.listItem}>
              <List.Item
                title={`Teléfono: ${usuario.telefono}`}
                left={props => <List.Icon {...props} icon="phone" color="#c898b6" />}
              />
            </View>
            <View style={styles.listItem}>
              <List.Item
                title={`Dirección: ${usuario.direccion}`}
                left={props => <List.Icon {...props} icon="map-marker" color="#c898b6" />}
              />
            </View>
            <View style={styles.listItem}>
              <List.Item
                title="Configuración"
                left={props => <List.Icon {...props} icon="cog" color="#c898b6" />}
                onPress={() => router.push('/configuracion')}
              />
            </View>
          </View>

          <Button mode="text"
            style={styles.logoutButton}
            labelStyle={styles.logoutLabel}
            onPress={showDialog}>
            Cerrar sesión
          </Button>

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Icon icon="logout" />

              <Dialog.Title>Cierre de sesión</Dialog.Title>

              <Dialog.Content>
                <Text variant="bodyMedium">
                  ¿Estás seguro que quieres cerrar la sesión?
                </Text>
              </Dialog.Content>

              <Dialog.Actions>
                <Button onPress={hideDialog}>
                  Cancelar
                </Button>
                <Button
                  onPress={handleLogout}
                  buttonColor="#dc8fbeff"
                  textColor="white"
                  mode="contained"
                >
                  Cerrar Sesión
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>

        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    padding: 20,
    marginTop: 65
  },
  avatar: {
    backgroundColor: '#cb91b2ff',
    marginBottom: 16
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  email: {
    color: '#666',
    marginBottom: 16
  },
  infoTitle: {
    fontWeight: 'bold',
    marginTop: 12
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 24,
    backgroundColor: 'white',
    marginBottom: 10
  },
  logoutButton: {
    marginTop: 10
  },
  logoutLabel: {
    color: '#dc8fbeff',
    fontWeight: 'bold',
    fontSize: 16

  },
});