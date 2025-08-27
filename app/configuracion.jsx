import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, List, Switch, Button } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(true);
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{
        title: 'Configuración',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 30 }}>Ajustes</Text>

          <View style={{ gap: 10 }}>
            <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
              <List.Item
                title="Cuenta"
                left={props => <List.Icon {...props} icon="key" color="#c898b6" />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => { }}
              />
            </View>
            <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
              <List.Item
                title="Notificaciones"
                left={props => <List.Icon {...props} icon="bell" color="#c898b6" />}
                right={props => (
                  <Switch value={notificaciones} onValueChange={setNotificaciones} color="#dc8fbeff" />
                )}
              />
            </View>
            <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
              <List.Item
                title="Privacidad"
                left={props => <List.Icon {...props} icon="shield-lock" color="#c898b6" />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => { }}
              />
            </View>
            <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
              <List.Item
                title="Seguridad"
                left={props => <List.Icon {...props} icon="lock" color="#c898b6" />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => { }}
              />
            </View>
            <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
              <List.Item
                title="Ayuda"
                left={props => <List.Icon {...props} icon="help-circle" color="#c898b6" />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                onPress={() => { }}
              />
            </View>
          </View>


        </View>
      </ScrollView>
    </>);
}
