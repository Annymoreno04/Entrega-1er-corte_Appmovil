import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, Button, IconButton, Chip, Searchbar } from "react-native-paper";
import { Provider, Portal, FAB, Snackbar } from "react-native-paper";
import { Stack } from "expo-router";



export default function Tutoriales() {
  const [likes, setLikes] = useState({});
  const [categoria, setCategoria] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [fabOpen, setFabOpen] = React.useState(false);
  const [snack, setSnack] = React.useState({ visible: false, text: "" });


  const categorias = ["Todas", "Acrílicas", "Semipermanentes", "Minimalistas", "Francesas", "Tendencias", "Cuidado", "Nail Art", "Gel", "Técnicas", "Polygel"];


  const tutoriales = [
    { id: 1, titulo: "Uñas Acrílicas: Guía Completa", imagen: { uri: "https://i.pinimg.com/1200x/55/f7/b2/55f7b2b52bb8777d77cb37e0096236c6.jpg" }, categoria: "Acrílicas" },
    { id: 2, titulo: "Manicura Francesa: Un Clásico que Nunca Falla", imagen: { uri: "https://i.pinimg.com/1200x/7f/e9/cf/7fe9cf2253d08493800afcb4f8dc7576.jpg" }, categoria: "Francesas" },
    { id: 3, titulo: "Tendencias de Esmaltes para el 2025", imagen: { uri: "https://i.pinimg.com/1200x/42/15/54/421554010b80f2e35178cc50a12f7424.jpg" }, categoria: "Tendencias" },
    { id: 4, titulo: "Consejos para Fortalecer tus Uñas", imagen: { uri: "https://i.pinimg.com/1200x/f1/bb/8e/f1bb8e150308ce818dac20d933b737d4.jpg" }, categoria: "Cuidado" },
    { id: 5, titulo: "Nail Art para Principiantes", imagen: { uri: "https://i.pinimg.com/736x/e4/58/b6/e458b6a2247a99bf53f196d935eb244c.jpg" }, categoria: "Nail Art" },
    { id: 6, titulo: "Uñas de Gel: Ventajas y Desventajas", imagen: { uri: "https://i.pinimg.com/736x/df/fa/b8/dffab8da980ffb42f1dd80cb4af6f8e2.jpg" }, categoria: "Gel" },
    { id: 7, titulo: "Herramientas Indispensables para la Manicura en Casa", imagen: { uri: "https://i.pinimg.com/736x/ab/24/82/ab2482147db8f7387247008697de04b7.jpg" }, categoria: "Cuidado" },
    { id: 8, titulo: "Cómo Evitar las Uñas Amarillas", imagen: { uri: "https://i.pinimg.com/1200x/72/f4/88/72f48837a214135d45cfc49a5f4756a3.jpg" }, categoria: "Cuidado" },
    { id: 9, titulo: "Los Colores de Uñas que son Tendencia este Verano", imagen: { uri: "https://i.pinimg.com/736x/ea/b9/fd/eab9fd02ce70a3cdd8f757230f2a1ee7.jpg" }, categoria: "Tendencias" },
    { id: 10, titulo: "Mitos y Verdades sobre el Crecimiento de las Uñas", imagen: { uri: "https://i.pinimg.com/1200x/60/0d/e4/600de41940ac76354035092129577033.jpg" }, categoria: "Cuidado" },
    { id: 11, titulo: "Uñas de Porcelana vs. Acrílicas: ¿Cuál Elegir?", imagen: { uri: "https://i.pinimg.com/1200x/f7/84/13/f78413669fdeef50951d9fa49300719e.jpg" }, categoria: "Acrílicas" },
    { id: 12, titulo: "Cuidado de Cutículas: La Clave para una Manicura Perfecta", imagen: { uri: "https://i.pinimg.com/1200x/2b/b4/c4/2bb4c4cbd7f0efc0c0f0fbd6e9cc3de2.jpg" }, categoria: "Cuidado" },
    { id: 13, titulo: "Nail Art con Efecto Degradado (Ombré)", imagen: { uri: "https://i.pinimg.com/736x/cd/e8/67/cde86724796b284611869a622b51c863.jpg" }, categoria: "Nail Art" },
    { id: 14, titulo: "Los Mejores Esmaltes de Larga Duración", imagen: { uri: "https://i.pinimg.com/1200x/a6/18/2e/a6182e06aada46519ac1f322a1777d5f.jpg" }, categoria: "Tendencias" },
    { id: 15, titulo: "Cómo Quitar el Esmalte Semi-Permanente en Casa", imagen: { uri: "https://i.pinimg.com/1200x/6d/a4/f3/6da4f30e199dc77baf349f2200a6e9e3.jpg" }, categoria: "Semipermanentes" },
    { id: 16, titulo: "Uñas Cortas: Ideas de Diseños Elegantes", imagen: { uri: "https://i.pinimg.com/736x/00/1d/52/001d523406c57d047d4bdbfe846e6e8c.jpg" }, categoria: "Minimalistas" },
    { id: 17, titulo: "Alimentación y la Salud de tus Uñas", imagen: { uri: "https://i.pinimg.com/1200x/b2/fb/2f/b2fb2fec5f6ed7dc84d1d60d7c62e9bc.jpg" }, categoria: "Cuidado" },
    { id: 18, titulo: "Cómo Reparar una Uña Rota", imagen: { uri: "https://i.pinimg.com/736x/fb/05/bf/fb05bf173847f0b410d732474dd2b9c0.jpg" }, categoria: "Cuidado" },
    { id: 19, titulo: "Manicura Rusa: La Técnica de Moda", imagen: { uri: "https://i.pinimg.com/1200x/2b/0b/33/2b0b33e112348c8f636713dcb38256d2.jpg" }, categoria: "Técnicas" },
    { id: 20, titulo: "Uñas de Polygel: La Fusión Perfecta", imagen: { uri: "https://i.pinimg.com/1200x/c2/d2/d5/c2d2d51896e6872f8613d76614e86148.jpg" }, categoria: "Polygel" },
    { id: 21, titulo: "El Top Coat y la Base Coat: ¿Realmente los Necesitas?", imagen: { uri: "https://i.pinimg.com/1200x/0a/34/b6/0a34b64aabbbf0f5e0de55ead12c74cc.jpg" }, categoria: "Cuidado" },
    { id: 22, titulo: "Diseños de Uñas con Efecto Mármol", imagen: { uri: "https://i.pinimg.com/736x/05/cd/4e/05cd4e4b3ee437ca082fd80d84412bc4.jpg" }, categoria: "Nail Art" },
    { id: 23, titulo: "Cuidados Esenciales para Uñas Postizas", imagen: { uri: "https://i.pinimg.com/736x/fd/ae/09/fdae09a008a691ee07e081cf251eacbd.jpg" }, categoria: "Cuidado" },
    { id: 24, titulo: "Los Beneficios del Aceite de Ricino para las Uñas", imagen: { uri: "https://i.pinimg.com/1200x/17/29/04/172904b5f597aed97aab72fa6233caf0.jpg" }, categoria: "Cuidado" },
    { id: 25, titulo: "Esmaltes de Uñas con Acabado Mate", imagen: { uri: "https://i.pinimg.com/1200x/c5/0f/b8/c50fb830af25dc29b11c702990879c1b.jpg" }, categoria: "Tendencias" },
  ];


  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };


  const tutorialesFiltrados = tutoriales.filter((tuto) => {
    const coincideCategoria = categoria === "Todas" || tuto.categoria === categoria;
    const coincideBusqueda = tuto.titulo.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <>
      <Stack.Screen options={{
        title: 'Home',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <Provider>
        <ScrollView style={styles.container}>


          <Searchbar
            placeholder="Buscar tutorial..."
            value={busqueda}
            onChangeText={setBusqueda}
            style={styles.searchbar}
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

          {/* Snackbar para feedback */}
          <Snackbar
            visible={snack.visible}
            onDismiss={() => setSnack({ visible: false, text: "" })}
            duration={2000}
          >
            {snack.text}
          </Snackbar>

          {/* Filtros por categoría */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filtros}
          >
            {categorias.map((cat) => (
              <Chip
                key={cat}
                selected={categoria === cat}
                onPress={() => setCategoria(cat)}
                style={styles.chip}
              >
                {cat}
              </Chip>
            ))}
          </ScrollView>
          <Text style={styles.header}>Inspírate con nuestros tutoriales </Text>
          <Text style={styles.subtext}>Descubre estilos, aprende técnicas y elige tu próximo look</Text>

          {/* Galería de tutoriales */}
          {tutorialesFiltrados.map((tuto) => (
            <Card key={tuto.id} style={styles.card}>
              <Card.Cover source={tuto.imagen} />
              <Card.Content>
                <Text style={styles.title}>{tuto.titulo}</Text>
                <Text style={styles.categoria}>#{tuto.categoria}</Text>
              </Card.Content>
              <Card.Actions style={styles.actions}>
                <Button style={styles.button} mode="contained" onPress={() => console.log("Ver tutorial")}>
                  ▶ Ver
                </Button>
                <View style={styles.likes}>
                  <IconButton
                    icon="heart"
                    iconColor="#dc8fbeff"
                    size={24}
                    onPress={() => toggleLike(tuto.id)}
                  />
                  <Text>{likes[tuto.id] || 0}</Text>
                </View>
              </Card.Actions>
            </Card>
          ))}
        </ScrollView>
      </Provider>
    </>);
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 70,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center"
  },
  subtext: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
    textAlign: "center"
  },
  searchbar: {
    marginBottom: 10,
    borderRadius: 20,
  },
  filtros: {
    marginBottom: 15
  },
  chip: {
    margin: 4
  },

  card: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  categoria: {
    fontSize: 13,
    fontWeight: "500",
    color: '#8a2be2',
    marginBottom: 5,
  },
  actions: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    color: '#dc8fbeff',
  },
  button: {
    backgroundColor: '#dc8fbeff',
  },
  likes: {
    flexDirection: "row",
    alignItems: "center"
  },

  fab: {
    backgroundColor: "#F1E7F6",
    borderRadius: 20,
  },

});
