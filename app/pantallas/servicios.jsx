import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Alert } from "react-native";
import { Text, Searchbar, Button, Avatar } from "react-native-paper";
import { useRouter } from "expo-router";
import { Provider, Portal, FAB, Snackbar } from "react-native-paper";
import { Stack } from "expo-router";


export default function Servicios() {
  const router = useRouter();
  const [textoBuscar, setTextoBuscar] = useState("");
  const [fabOpen, setFabOpen] = React.useState(false);
  const [snack, setSnack] = React.useState({ visible: false, text: "" });

  // Datos quemados de servicios
  const servicios = [
    {
      id: 1,
      titulo: "Acrílicas",
      descripcion: "Uñas resistentes y estilizadas con acrílico.",
      duracion: "45 min",
      imagen: require('../../assets/img/Acrilicas.jpg'),
    },
    {
      id: 2,
      titulo: "Dipping",
      descripcion: "Técnica en polvo para un acabado natural y duradero.",
      duracion: "45 min",
      imagen: require('../../assets/img/Dipping.jpg'),
    },
    {
      id: 3,
      titulo: "Press On",
      descripcion: "Uñas removibles, prácticas y de larga duración.",
      duracion: "45 min",
      imagen: require('../../assets/img/Presson.jpg'),
    },
    {
      id: 4,
      titulo: "Gel",
      descripcion: "Brillo intenso y duración prolongada en tus uñas.",
      duracion: "45 min",
      imagen: require('../../assets/img/Gel.jpg'),
    },
    {
      id: 5,
      titulo: "Semi",
      descripcion: "Esmaltado semipermanente con acabado profesional.",
      duracion: "45 min",
      imagen: require('../../assets/img/Semi.jpg'),
    },
    {
      id: 6,
      titulo: "Forrado Acrílico",
      descripcion: "Protección y refuerzo de la uña natural con acrílico.",
      duracion: "45 min",
      imagen: require('../../assets/img/Forradoa.jpg'),
    },
  ];

  const [listaFiltrada, setListaFiltrada] = useState(servicios);


  useEffect(() => {
    const filtrados = servicios.filter((item) =>
      item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setListaFiltrada(filtrados);
  }, [textoBuscar]);

  return (
    <>
      <Stack.Screen options={{
        title: 'Home',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <Provider>
        <ScrollView style={{ backgroundColor: "#fff" }} >
          <View style={styles.container}>
          
            <Searchbar
              style={styles.searchBar}
              placeholder="Buscar servicio"
              value={textoBuscar}
              onChangeText={setTextoBuscar}
            />
            <Portal>
              <FAB.Group
                open={fabOpen}
                visible
                icon={fabOpen ? "close" : "plus"}
                fabStyle={styles.fab}
                color="black"
                actions={[
                  {
                    icon: "calendar-plus",
                    label: "Nueva cita",
                    onPress: () => Alert.alert("Nueva cita", "Función de nueva cita activada"),
                  },
                  {
                    icon: "whatsapp",
                    label: "WhatsApp",
                    onPress: () => Alert.alert("WhatsApp", "Función de WhatsApp activada"),
                  },
                ]}
                onStateChange={({ open }) => setFabOpen(open)}
              />
            </Portal>


            <Snackbar
              visible={snack.visible}
              onDismiss={() => setSnack({ visible: false, text: "" })}
              duration={2000}
            >
              {snack.text}
            </Snackbar>
            {listaFiltrada.map((item) => (
              <View key={item.id} style={styles.card}>
      
                <Avatar.Image
                  source={item.imagen}
                  size={80}
                  style={styles.avatar}
                />
                <View style={styles.textContainer}>
                  <Text variant="titleMedium" style={styles.titulo}>
                    {item.titulo}
                  </Text>

                  <Text variant="bodySmall" style={styles.descripcion}>
                    {item.descripcion}
                  </Text>

                  <Text variant="bodySmall" style={styles.duracion}>
                    ⏱ {item.duracion}
                  </Text>

                  <Button
                    mode="contained"
                    style={styles.btnReservar}
                    labelStyle={styles.btnText}
                    onPress={() => Alert.alert('Boton reservar', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                  >
                    Reservar
                  </Button>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  searchBar: {
    marginTop: 70,
    marginBottom: 16,
    borderRadius: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    elevation: 2,
  },
  avatar: {
    backgroundColor: "#f8e1f4",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  descripcion: {
    color: "#444",
    marginBottom: 4,
  },
  duracion: {
    color: "#777",
    marginBottom: 8,
  },
  btnReservar: {
    backgroundColor: "#dc8fbeff",
    borderRadius: 24,
    alignSelf: "flex-end",
    paddingHorizontal: 16,
  },
  btnText: {
    color: "white",
    fontSize: 13,
  },
  fab: {
    backgroundColor: "#F1E7F6",
    borderRadius: 20,
  },
});
