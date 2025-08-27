import { View, Image, ScrollView, Alert } from 'react-native';
import { ImageBackground, StyleSheet } from 'react-native';
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { useState } from 'react';


export default function InicioSesion() {
    const router = useRouter();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    const buscarUsuario = () => {
        if (!usuario || usuario.trim() === '') {
            Alert.alert("Campo requerido", "Por favor ingrese su usuario");
            return;
        }

        if (!contrasena || contrasena.trim() === '') {
            Alert.alert("Campo requerido", "Por favor ingrese su contraseña");
            return;
        }


        if (usuario.toLowerCase() === "jailyn" && contrasena === "12345") {
            router.push('bienvenido')
            Alert.alert("Acceso concedido", "Bienvenid@");
            setUsuario("")
            setContrasena("")


        } else {
            Alert.alert("Acceso denegado", "Usuario o contraseña incorrectos.");

            setUsuario("")
            setContrasena("")
        }
    };


    return (
        <>
            <Stack.Screen options={{
                title: 'Iniciar sesión',
                headerShown: true,
                headerStyle: { backgroundColor: '#f9f8ff' },
            }} />
            <ImageBackground
                source={{ uri: 'https://i.pinimg.com/736x/2b/c9/8e/2bc98e60d1b09ec2fca777ced9dab564.jpg' }}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <ScrollView style={{ backgroundColor: 'rgba(249, 248, 255, 0.7)' }}>
                    <View style={{
                        backgroundColor: '#fff',
                        borderRadius: 18,
                        alignContent: 'center',
                        justifyContent: 'center',
                        padding: 20,
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: '20%',
                    }}>


                        <Image
                            source={require("../assets/img/ANNIE NAILS.png")}
                            style={{
                                width: '80%',
                                height: 90,
                                alignSelf: "center",
                                marginTop: 10,
                            }}
                        />

                        <Text variant="headlineLarge" style={styles.titulo}>
                            Iniciar Sesión
                        </Text>

                        <TextInput
                            label="Usuario"
                            value={usuario}
                            onChangeText={setUsuario}
                            left={<TextInput.Icon icon="account" color='#c898b6' />}
                            style={styles.input}
                            autoCapitalize="none"
                            mode='outlined'
                            theme={{ roundness: 20 }}
                        />

                        <TextInput
                            label="Contraseña"
                            value={contrasena}
                            onChangeText={setContrasena}
                            secureTextEntry={!mostrarContrasena}
                            left={<TextInput.Icon icon="lock" color="#c898b6" />}
                            right={
                                <TextInput.Icon
                                    icon={mostrarContrasena ? "eye-off" : "eye"}
                                    onPress={() => setMostrarContrasena(!mostrarContrasena)}
                                />
                            }
                            style={styles.input}
                            mode="outlined"
                            theme={{ roundness: 20 }}
                        />
                        <Text style={styles.olvidarTexto}>
                            ¿Olvidaste tu contraseña?
                        </Text>

                        <Button
                            mode="contained"
                            style={styles.boton}
                            labelStyle={styles.botonTexto}
                            onPress={buscarUsuario}>
                            INICIAR SESIÓN
                        </Button>



                        <View style={styles.separador}>
                            <View style={styles.linea} />
                            <Text style={styles.oTexto}>Continuar con</Text>
                            <View style={styles.linea} />
                        </View>



                        <View style={styles.container}>
                            <IconButton
                                icon={() => <MaterialCommunityIcons name="facebook" size={35} color={'#898080ff'} />}
                                style={styles.roundButton}
                                onPress={() => Alert.alert('Ingreso con Facebook', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                            />

                            <IconButton
                                icon={() => <MaterialCommunityIcons name="google" size={35} color={'#898080ff'} />}
                                style={styles.roundButton}
                                onPress={() => Alert.alert('Ingreso con Google', 'Estamos mejorando para brindarte una mejor experiencia, esta funcionalidad pronto estará disponible')}
                            />
                        </View>
                        <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 15 }}>
                            ¿No tienes una cuenta?{' '}
                            <Text style={styles.registrarTexto} onPress={() => router.push('registrar')}>
                                Regístrate
                            </Text>
                        </Text>

                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    );
}
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f9f8ff',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "#f9f8ff",
    },
    titulo: {
        marginTop: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#9089cc',
        fontSize: 36,

    },
    input: {
        marginBottom: 15,
        backgroundColor: 'white',
    },
    olvidarTexto: {
        color: '#a18cf0',
        textAlign: 'right',
        marginBottom: 20,
        marginTop: 5,
        fontSize: 13,
    },
    registrarTexto: {
        color: '#a18cf0',
        textAlign: 'right',
        marginBottom: 20,
        marginTop: 5,
        fontSize: 15,

    },
    boton: {
        backgroundColor: '#dc8fbeff',
        borderRadius: 30,
        marginBottom: 20,
        paddingVertical: 5,
    },
    botonTexto: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    separador: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    linea: {
        flex: 1,
        height: 1,
        backgroundColor: '#bbb',
    },
    oTexto: {
        marginHorizontal: 8,
        color: '#bbb',
        fontWeight: 'bold',
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20,

    },
    roundButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f3e3ecff',
    },
});