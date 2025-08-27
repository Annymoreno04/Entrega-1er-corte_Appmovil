import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Appbar, Text, BottomNavigation, Avatar } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Stack } from "expo-router";


import Inicio from "./pantallas/inicio";
import Servicios from "./pantallas/servicios";
import Crear from "./pantallas/crearCita";
import Tutoriales from "./pantallas/tutoriales";
import Perfil from "./pantallas/perfil";

export default function MenuBottom() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "inicio", title: "", icon: "home-outline" },
    { key: "servicios", title: "", icon: "briefcase-search-outline" },
    { key: "crear", title: "", icon: "plus-box-outline" },
    { key: "tutoriales", title: "", icon: "movie-play-outline" },
    { key: "perfil", title: "", icon: "account-circle" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Inicio,
    servicios: Servicios,
    crear: Crear,
    tutoriales: Tutoriales,
    perfil: Perfil,
  });


  const renderIcon = ({ route, color }) => (
    <MaterialCommunityIcons name={route.icon} color={color} size={26} />
  );

  return (
    <>
      <Stack.Screen options={{
        title: 'Home',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
    <View style={{ flex: 1, backgroundColor: "#fff"}}>
    
      <Appbar style={styles.navbar}>
        <TouchableOpacity >
          <Image
            source={require("../assets/img/ANNIE NAILS.png")}
            style={styles.imgLogo}
            resizeMode="contain"

          />
        </TouchableOpacity>
        <View style={styles.userWrapper}>
          <Text style={styles.nombreUsuario}>Jailyn</Text>
          <Avatar.Image
            size={40}
            source={require('../assets/img/anny.png')}
            style={styles.usuario}
          />
        </View>
      </Appbar>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        barStyle={{ backgroundColor: "white" }}
        activeColor="#dc8fbeff"
        inactiveColor="#333"

      />
    </View>
 </> );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#F9E8EE",
    height: 63,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
  imgLogo: {
    width: 120,
    height: 40,
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  nombreUsuario: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginRight: 6,
  },
  nombreUsuario: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
