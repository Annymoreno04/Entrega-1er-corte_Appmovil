
import React, { useState, useRef, useEffect } from "react";
import {
  View, Image, StyleSheet, FlatList, Dimensions, Alert, Linking, TouchableOpacity,
} from "react-native";
import { Provider, Portal, FAB, Snackbar, Surface, } from "react-native-paper";
import { ImageBackground, ScrollView } from "react-native";
import { Button, Text, Card, List } from "react-native-paper";
import { Stack } from "expo-router";


const servicios = [
  { id: "acrilicas", title: "Acrílicas", image: require("../../assets/img/serv1.jpg") },
  { id: "pressOn", title: "Press On", image: require("../../assets/img/serv2.jpg") },
  { id: "forradoA", title: "ForradoA", image: require("../../assets/img/serv3.jpg") },
  { id: "semi", title: "Semi", image: require("../../assets/img/serv4.jpg") },
  { id: "dipping", title: "Dipping", image: require("../../assets/img/serv5.jpg") },
  { id: "gel", title: "Gel", image: require("../../assets/img/serv6.jpg") },
];
const { width } = Dimensions.get("window");

const images = [
  require("../../assets/img/pag1.png"),
  require("../../assets/img/pag2.png"),
  require("../../assets/img/pag3.png"),
  require("../../assets/img/pag4.png"),
];

const disenos = [
  require("../../assets/img/diseno1.png"),
  require("../../assets/img/diseno3.png"),
  require("../../assets/img/diseno2.png"),
];

const equipo = [
  {
    id: 1,
    nombre: "Angie Mena",
    descripcion:
      "Experta en manicura con una pasión por el arte y la precisión. Con 5 años de experiencia, especializada en manicuras que promueven la salud de las uñas.",
    imagen: require("../../assets/img/profile1.jpg"),
  },
  {
    id: 2,
    nombre: "Caroline Perea",
    descripcion:
      "Manicurista dedicada con habilidades expertas en cuidado de uñas. Con 4 años de trayectoria, combina técnicas modernas con atención meticulosa a los detalles.",
    imagen: require("../../assets/img/profile2.jpg"),
  },
  {
    id: 3,
    nombre: "Stefhany Lemus",
    descripcion:
      "Profesional enfocada en la belleza y el bienestar de las uñas. Con 2 años de experiencia, fusiona técnicas tradicionales con las últimas tendencias.",
    imagen: require("../../assets/img/profile3.jpg"),
  },
  {
    id: 4,
    nombre: "Andrea Moreno",
    descripcion:
      "Especialista en crear diseños impresionantes. Con 1 año en la industria, se enfoca en manicuras artísticas y terapéuticas que cuidan la salud de las uñas.",
    imagen: require("../../assets/img/profile4.jpg"),
  },
  {
    id: 5,
    nombre: "Tatiana Palacios",
    descripcion:
      "Manicurista certificada con experiencia en técnicas avanzadas. Con 4 años, ofrece manicuras de alta calidad que combinan estética y bienestar.",
    imagen: require("../../assets/img/profile5.jpg"),
  },
  {
    id: 6,
    nombre: "Ashly Valderrama",
    descripcion:
      "Comprometida con la excelencia y la creatividad. Con 2 años de experiencia, domina técnicas de cuidado de uñas desde lo clásico hasta lo contemporáneo.",
    imagen: require("../../assets/img/profile6.jpg"),
  },
];

const trabajos = [
  {
    id: 1,
    img: require("../../assets/img/nu1.jpg"),
    descripcion:
      "FORRADO DE ACRÍLICO: Diseño de frances fucsia y brillantina con decoración de corazones.",
  },
  {
    id: 2,
    img: require("../../assets/img/nu4.jpg"),
    descripcion:
      "UÑAS ACRILICAS CON TIPS: Diseño con color blanco y degradado rosado, uña con brillantina degradada.",
  },
  {
    id: 3,
    img: require("../../assets/img/nu3.jpg"),
    descripcion:
      "FORRADO DE ACRILICO: Diseño básico con fraces ovalado fucsia.",
  },
  {
    id: 4,
    img: require("../../assets/img/nu7.jpg"),
    descripcion:
      "TECNICA DIPPING: Diseño de flores con color otoño y frances sencillo.",
  },
  {
    id: 5,
    img: require("../../assets/img/nu5.jpg"),
    descripcion:
      "UÑAS EN GEL: Diseño con uñas de color morado, stickers de mariposa con decoracion blanco y accesorios brillantes.",
  },
  {
    id: 6,
    img: require("../../assets/img/nu2.jpg"),
    descripcion:
      "UÑAS SEMIPERMANENTE: Diseño de un corazon y la letra a en una uña con color blanco de fondo.",
  },
  {
    id: 7,
    img: require("../../assets/img/nu6.jpg"),
    descripcion:
      "UÑAS EN GEL: Diseño con stickers de mariposa, frances blanco y decoraciones con color fucsia.",
  },
  {
    id: 8,
    img: require("../../assets/img/nun.jpg"),
    descripcion:
      "UÑAS EN GEL: Diseño de mariposas con colores fucsia y amarillo, decoradas con frances fucsia con puntos blancos.",
  },
];

export default function Inicio() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);
  const [fabOpen, setFabOpen] = React.useState(false);
  const [snack, setSnack] = React.useState({ visible: false, text: "" });
  const [selectedCard, setSelectedCard] = useState(null);


  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      setIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Stack.Screen options={{
        title: 'Home',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <Provider>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <View style={styles.slider}>
              <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                  <Image source={item} style={styles.image} resizeMode="cover" />
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                  const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
                  setIndex(newIndex);
                }}
              />
              <View style={styles.dotsContainer}>
                {images.map((_, i) => (
                  <View
                    key={i}
                    style={[styles.dot, index === i && styles.dotActive]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.rosado}>
              {disenos.map((img, i) => (
                <View key={i} style={styles.contenedorInterno}>
                  <Image source={img} style={styles.diseno} resizeMode="contain" />
                </View>
              ))}
            </View>

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

            <View style={styles.parent}>

              <View style={styles.container1}>

                <ImageBackground
                  source={servicios[0].image}
                  style={[styles.serviceItem, styles.div1]}
                  imageStyle={styles.imageStyle}
                >
                  <Button
                    mode="contained"
                    onPress={() => Alert.alert('Acrílicas', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                    style={[styles.serviceButton, styles.btn1]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonText}
                  >
                    Acrílicas
                  </Button>
                </ImageBackground>

                <ImageBackground
                  source={servicios[1].image}
                  style={[styles.serviceItem, styles.div2]}
                  imageStyle={styles.imageStyle}
                >
                  <Button
                    mode="contained"
                    onPress={() => Alert.alert('Pres On', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                    style={[styles.serviceButton, styles.btn2]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonText}
                  >
                    Press on
                  </Button>
                </ImageBackground>


                <ImageBackground
                  source={servicios[4].image}
                  style={[styles.serviceItem, styles.div5]}
                  imageStyle={styles.imageStyle}
                >
                  <Button
                    mode="contained"
                    onPress={() => Alert.alert('Dipping', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                    style={[styles.serviceButton, styles.btn5]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonText}
                  >
                    Dipping
                  </Button>
                </ImageBackground>
              </View>


              <View style={styles.container2}>

                <ImageBackground
                  source={servicios[2].image}
                  style={[styles.serviceItem, styles.div3]}
                  imageStyle={styles.imageStyle}
                >
                  <Button
                    mode="contained"
                    onPress={() => Alert.alert('Forrado A', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                    style={[styles.serviceButton, styles.btn3]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonText}
                  >
                    ForradoA
                  </Button>
                </ImageBackground>

                <ImageBackground
                  source={servicios[3].image}
                  style={[styles.serviceItem, styles.div4]}
                  imageStyle={styles.imageStyle}
                >
                  <Button
                    mode="contained"
                    onPress={() => Alert.alert('Semi', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                    style={[styles.serviceButton, styles.btn4]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonText}
                  >
                    Semi
                  </Button>
                </ImageBackground>

                <ImageBackground
                  source={servicios[5].image}
                  style={[styles.serviceItem, styles.div6]}
                  imageStyle={styles.imageStyle}
                >
                  <Button
                    mode="contained"
                    onPress={() => Alert.alert('Gel', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                    style={[styles.serviceButton, styles.btn6]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonText}
                  >
                    Gel
                  </Button>
                </ImageBackground>
              </View>
            </View>

            <ScrollView contentContainerStyle={styles.trabajoContainer}>

              <Button
                mode="outlined"
                style={styles.trabajoBoton}
                labelStyle={styles.trabajoBotonTexto}
              >
                Nuestro Trabajo
              </Button>

              <View style={styles.tarjetasWrapper}>
                {trabajos.map((item) => (
                  <Card
                    key={item.id}
                    style={styles.trabajoTarjeta}
                    elevation={5}
                    onPress={() => setSelectedCard(selectedCard === item.id ? null : item.id)}
                  >
                    <View style={styles.imagenContainer}>
                      <Image source={item.img} style={styles.trabajoImagen} />
                      {selectedCard === item.id && (
                        <View style={styles.trabajoDescripcionWrapper}>
                          <Text style={styles.trabajoDescripcion}>
                            {item.descripcion}
                          </Text>
                        </View>
                      )}
                    </View>
                  </Card>
                ))}
              </View>
            </ScrollView>

            <View style={styles.ubicacionWrapper}>
              <Card style={styles.ubicacionCard}>
                <Card.Content style={styles.ubicacionContent}>
                  <Text style={styles.ubicacionTitulo}>Conozca nuestra {''} ubicación</Text>
                  <View style={styles.ubicacionLista}>
                    <View style={styles.ubicacionItem}><List.Icon icon="check" color="#dc8fbeff" /><Text style={styles.ubicacionTexto}>Manicure</Text></View>
                    <View style={styles.ubicacionItem}><List.Icon icon="check" color="#dc8fbeff" /><Text style={styles.ubicacionTexto}>Pedicure</Text></View>
                    <View style={styles.ubicacionItem}><List.Icon icon="check" color="#dc8fbeff" /><Text style={styles.ubicacionTexto}>Uñas Acrílicas</Text></View>
                    <View style={styles.ubicacionItem}><List.Icon icon="check" color="#dc8fbeff" /><Text style={styles.ubicacionTexto}>Uñas en Gel</Text></View>
                    <View style={styles.ubicacionItem}><List.Icon icon="check" color="#dc8fbeff" /><Text style={styles.ubicacionTexto}>Decoración de Uñas</Text></View>
                  </View>
                  <Text style={styles.ubicacionDireccion}>Calle 18 No. 16-20, Medrano{"\n"}Quibdó, Chocó</Text>
                  <Button
                    mode="outlined"
                    style={styles.ubicacionBoton}
                    labelStyle={styles.ubicacionBotonTexto}
                    textColor="#dc8fbeff"
                    onPress={() => Alert.alert('Conoce nuestro espacio', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                  >
                    Ver más detalles
                  </Button>
                </Card.Content>
              </Card>
            </View>

            <View style={styles.equipoContainer}>
              <Text variant="headlineSmall" style={styles.equipoTitulo}>
                Nuestro Equipo
              </Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.equipoSlideContent}
              >
                {equipo.map((persona) => (
                  <Surface key={persona.id} style={styles.equipoCard} elevation={4}>
                    <View style={styles.equipoImageContent}>
                      <View style={styles.equipoOverlay} />
                      <View style={styles.equipoCardImage}>
                        <Image source={persona.imagen} style={styles.equipoCardImg} />
                      </View>
                    </View>
                    <View style={styles.equipoCardContent}>
                      <Text style={styles.equipoCardName}>{persona.nombre}</Text>
                      <Text style={styles.equipoCardDescription}>
                        {persona.descripcion}
                      </Text>
                    </View>
                  </Surface>
                ))}
              </ScrollView>
            </View>

            <View style={styles.footerContainer}>
              <ScrollView horizontal={false} contentContainerStyle={styles.footerContent}>


                <View style={styles.footerUbicacion}>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL("https://maps.app.goo.gl/PpTYZKyJi6WF9R2c6")
                    }
                  >
                    <Text style={styles.footerLink}>Ubicación: Cra 3 #17-20</Text>
                  </TouchableOpacity>
                  <Text style={styles.footerText}>
                    Líneas de atención: 3222555666 {"\n\n"}
                    Horario de atención:{"\n"}
                    Lunes a viernes: 10am - 5pm {"\n"}
                    Sábados: 10am - 2pm
                  </Text>
                </View>


                <View style={styles.footerRedes}>
                  <Text style={styles.footerTitulo}>Síguenos en:</Text>
                  <View style={styles.footerSocialIcons}>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          "https://www.facebook.com/annyjohana.morenoleudo?mibextid=ZbWKwL"
                        )
                      }
                    >
                      <Image
                        style={styles.footerIcon}
                        source={require("../../assets/img/icons8-facebook-50.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          "https://www.instagram.com/annienails.beauty?igsh=bnlhMjJuaXRrNGFh"
                        )
                      }
                    >
                      <Image
                        style={styles.footerIcon}
                        source={require("../../assets/img/icons8-instagram-50.png")}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          "https://x.com/leudo_anny27534?t=dau8jlc3jFN5j8FrDeTasA&s=09"
                        )
                      }
                    >
                      <Image
                        style={styles.footerIcon}
                        source={require("../../assets/img/icons8-twitterx-50.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.footerAyuda}>
                  <Text style={styles.footerText}>
                    Ayuda {"\n\n"}
                    ¿Quiénes somos? {"\n"}
                    Preguntas frecuentes {"\n"}
                    Asesoría personalizada {"\n"}
                    Promociones
                  </Text>
                </View>

              </ScrollView>

              <View style={styles.footerCopy}>
                <Text style={styles.footerCopyText}>
                  © 2024 Copyright: Todos los derechos reservados Annie Nails
                </Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </Provider>
    </>);
}

const styles = StyleSheet.create({
  ubicacionWrapper: {
    marginTop: 0,
    marginBottom: 18,
    alignItems: 'center',
  },
  ubicacionCard: {
    width: '95%',
    borderRadius: 18,
    backgroundColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    paddingVertical: 10,
  },
  ubicacionContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  ubicacionTitulo: {
    color: '#dc8fbeff',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 10,
  },
  ubicacionLista: {
    width: '100%',
    marginBottom: 10,
  },
  ubicacionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 10,
  },
  ubicacionTexto: {
    fontSize: 17,
    color: '#555',
    marginLeft: 2,
  },
  ubicacionDireccion: {
    color: '#dc8fbeff',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 10,
  },
  ubicacionBoton: {
    borderColor: '#dc8fbeff',
    borderWidth: 1.5,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  ubicacionBotonTexto: {
    color: '#dc8fbeff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "#dc8fbeff",
    width: 10,
    height: 10,
  },

  slider: {
    marginTop: 80,
    width: "100%",
    height: 220,
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    width: width,
    height: "100%",
    borderRadius: 30,
  },
  rosado: {
    marginTop: 10,
    height: 50,
    backgroundColor: "rgba(247, 232, 241, 1)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contenedorInterno: {
    padding: 0,
    margin: 10,
    height: "80%",
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  diseno: {
    width: "80%",
    height: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
  fab: {
    backgroundColor: "#F1E7F6",
    borderRadius: 20,
  },

  parent: {
    height: width > 750 ? 500 : 'auto',
    width: '100%',
    paddingHorizontal: width > 750 ? 50 : 15,
    flexDirection: width > 750 ? 'row' : 'column',
    marginTop: 20,
  },
  container1: {
    flex: 1,
    marginRight: width > 750 ? 15 : 0,
    marginBottom: width > 750 ? 0 : 20,
  },
  container2: {
    flex: 1,
    marginLeft: width > 750 ? 15 : 0,
  },
  serviceItem: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,
  },
  imageStyle: {
    borderRadius: 20,
    resizeMode: 'cover',
  },
  div1: {
    height: width > 750 ? '100%' : 200,
    marginBottom: width > 750 ? 0 : 15,
  },
  div2: {
    height: width > 750 ? '45%' : 150,
    marginBottom: 15,
  },
  div5: {
    height: width > 750 ? '45%' : 150,
  },
  div3: {
    height: width > 750 ? '45%' : 150,
    marginBottom: 15,
  },
  div4: {
    height: width > 750 ? '45%' : 150,
    marginBottom: 15,
  },
  div6: {
    height: width > 750 ? '45%' : 150,
  },
  serviceButton: {
    backgroundColor: '#CC78B5',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    left: 20,
    minWidth: width > 750 ? 150 : 100,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonContent: {
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: width > 750 ? 16 : 14,
  },
  btn1: {
    bottom: 20,
    left: 20,
  },
  btn2: {
    bottom: 20,
    left: 20,
  },
  btn3: {
    bottom: 20,
    left: 20,
  },
  btn4: {
    bottom: 20,
    left: 20,
  },
  btn5: {
    bottom: 20,
    left: 20,
  },
  btn6: {
    bottom: 20,
    left: 20,
  },


  trabajoContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },

  trabajoBoton: {
    backgroundColor: "white",
    borderColor: "#cc42a7",
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  trabajoBotonTexto: {
    color: "#cc42a7",
    fontSize: 16,
    fontWeight: "bold",
  },

  tarjetasWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 640,
  },

  trabajoTarjeta: {
    width: (width - 60) / 2,
    maxWidth: 290,
    height: 200,
    borderRadius: 45,
    marginBottom: 20,
    overflow: 'hidden',
  },

  imagenContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 45,
    overflow: 'hidden',
  },

  trabajoImagen: {
    width: "100%",
    height: "100%",
    borderRadius: 45,
    resizeMode: 'cover',
  },

  trabajoDescripcionWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba(219, 187, 207, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 45,
  },

  trabajoDescripcion: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },

  equipoContainer: {
    paddingVertical: 25,
  },
  equipoTitulo: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    width: 200,
    alignSelf: "center",
    padding: 10,
    borderRadius: 25,
  },
  equipoSlideContent: {
    marginHorizontal: 20,
  },
  equipoCard: {
    borderRadius: 25,
    backgroundColor: "#FFF",
    marginRight: 20,
    width: 280,
    overflow: "hidden",
  },
  equipoImageContent: {
    position: "relative",
    alignItems: "center",
    paddingVertical: 25,
  },
  equipoOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#efb3df",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  equipoCardImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "#FFF",
    padding: 3,
    zIndex: 1,
  },
  equipoCardImg: {
    height: "100%",
    width: "100%",
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#efb3df",
  },
  equipoCardContent: {
    padding: 14,
    alignItems: "center",
  },
  equipoCardName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  equipoCardDescription: {
    fontSize: 14,
    color: "#707070",
    textAlign: "justify",
  },

  footerContainer: {
    backgroundColor: "#dca4cdff",
    padding: 20,
    width: "100%",
  },
  footerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerUbicacion: {
    alignItems: "center",
  },
  footerRedes: {
    alignItems: "center",
    marginBottom: 20,
  },
  footerTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  footerSocialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  footerAyuda: {
    alignItems: "center",

  },
  footerTituloAyuda: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  footerTextAyuda: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    lineHeight: 22,
  },
  footerText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "bold",
  },
  footerLink: {
    fontSize: 14,
    color: "black",
    textDecorationLine: "none",
    fontWeight: "bold",
    textAlign: "center",
  },
  footerCopy: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#000",
    paddingTop: 15,
    alignItems: "center",

  },
  footerCopyText: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },

});