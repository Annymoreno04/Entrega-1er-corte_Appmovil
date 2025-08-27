import React, { useState, useEffect, useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Provider as PaperProvider, ActivityIndicator, SegmentedButtons, List, Surface, Avatar, IconButton, Button, Portal, Dialog, Snackbar,
} from "react-native-paper";
import { Stack } from "expo-router";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const citasEjemplo = [
  { id: 1, servicio: "Manicure", cliente: "Jailyn", fecha: "2025-08-26", hora: "10:00 AM", estado: "pendiente" },
  { id: 2, servicio: "Pedicure", cliente: "Jailyn", fecha: "2025-08-25", hora: "2:00 PM", estado: "completada" },
  { id: 3, servicio: "Uñas Acrílicas", cliente: "Jailyn", fecha: "2025-08-27", hora: "4:00 PM", estado: "pendiente" },
];

export default function Crear() {
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("activas");
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [snack, setSnack] = useState(false);

  useEffect(() => {
    (async () => {
      await sleep(700);
      setLoading(false);
    })();
  }, []);

  const data = useMemo(() => {
    return citasEjemplo.filter((c) =>
      tab === "activas" ? c.estado !== "completada" : c.estado === "completada"
    );
  }, [tab]);

  if (loading) {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <ActivityIndicator animating size="large" />
          <Text style={{ marginTop: 8 }}>Cargando tus reservas...</Text>
        </View>
      </PaperProvider>
    );
  }

  return (
    <>
      <Stack.Screen options={{
        title: 'Reservas citas',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <PaperProvider>
        <View style={styles.container}>

          <SegmentedButtons
            value={tab}
            onValueChange={setTab}
            buttons={[
              { value: "activas", label: "Activas", icon: "clock-outline" },
              { value: "pasadas", label: "Pasadas", icon: "history" },
            ]}
            style={{ marginBottom: 16 }}
          />

          <List.Section>
            {data.map((c) => (
              <Surface key={c.id} style={styles.card}>
                <Avatar.Icon size={50} icon="calendar" style={styles.avatar} />


                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>


                  <View style={{ flex: 1 }}>
                    <Text style={styles.titulo}>{c.servicio} · {c.hora}</Text>
                    <Text style={styles.descripcion}>{c.cliente} — {c.fecha}</Text>
                    <Text style={styles.duracion}>Estado: {c.estado}</Text>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <IconButton
                      icon="pencil"
                      style={styles.fab}
                      onPress={() => setSnack(true)}
                    />
                    <IconButton
                      icon="delete"
                      style={styles.fab}
                      onPress={() => setConfirmDialog(true)}
                    />
                  </View>

                </View>
              </Surface>

            ))}
          </List.Section>

          <Portal>
            <Dialog visible={confirmDialog} onDismiss={() => setConfirmDialog(false)}>
              <Dialog.Title>Eliminar cita</Dialog.Title>
              <Dialog.Content>
                <Text>¿Seguro que deseas eliminar esta cita?</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => setConfirmDialog(false)}>No</Button>
                <Button
                  onPress={() => {
                    setConfirmDialog(false);
                    setSnack(true);
                  }}
                >
                  Sí
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>

          <Snackbar visible={snack} onDismiss={() => setSnack(false)}>
            Aún no puedes modificar tu información, estamos trabajando para brindarte nuevas funcionalidades
          </Snackbar>
        </View>
      </PaperProvider>
    </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 70,
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
    fontSize: 16,
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
