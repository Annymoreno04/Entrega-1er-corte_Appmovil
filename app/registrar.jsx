import { View, Image, ScrollView, Alert } from 'react-native';
import { ImageBackground, StyleSheet } from 'react-native';
import { Text, Button, TextInput, Icon } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { useState } from 'react';


export default function FormularioRegistro() {
    const router = useRouter();
    const [usuario, setUsuario] = useState("")
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmContrasena, setConfirmContrasena] = useState("");
    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [showConfirmContrasena, setShowConfirmContrasena] = useState(false);

    const validarCorreo = (correo) => {

        const re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
        return re.test(String(correo).toLowerCase());
    };

    const registrarUsuario = () => {
        if (!usuario || !nombre || !correo || !contrasena || !confirmContrasena) {
            Alert.alert('Error', 'Todos los campos son obligatorios. Por favor, llénalos.');
            return;
        }
        if (!validarCorreo(correo)) {
            Alert.alert('Error', 'El correo electrónico no es válido.');
            return;
        }
        if (contrasena !== confirmContrasena) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }
        Alert.alert('Éxito', 'Usuario registrado con éxito.');

        setUsuario("");
        setNombre("");
        setCorreo("");
        setContrasena("");
        setConfirmContrasena("");
    };

    return (
        <>
            <Stack.Screen options={{
                title: 'Registrarse',
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
                        marginTop: '10%',
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
                            Registro
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
                            label="Nombre completo"
                            value={nombre}
                            onChangeText={setNombre}
                            left={<TextInput.Icon icon="account-circle" color='#c898b6' />}
                            style={styles.input}
                            autoCapitalize="none"
                            mode='outlined'
                            theme={{ roundness: 20 }}
                        />

                        <TextInput
                            label="Correo"
                            value={correo}
                            onChangeText={setCorreo}
                            left={<TextInput.Icon icon="email" color='#c898b6' />}
                            style={styles.input}
                            autoCapitalize="none"
                            mode='outlined'
                            theme={{ roundness: 20 }}
                            keyboardType="email-address"
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
                        <TextInput
                            label="Confirmar contraseña"
                            value={confirmContrasena}
                            onChangeText={setConfirmContrasena}
                            secureTextEntry={!showConfirmContrasena}
                            left={<TextInput.Icon icon="lock" color="#c898b6" />}
                            right={
                                <TextInput.Icon
                                    icon={showConfirmContrasena ? "eye-off" : "eye"}
                                    onPress={() => setShowConfirmContrasena(!showConfirmContrasena)}
                                />
                            }
                            style={styles.input}
                            mode="outlined"
                            theme={{ roundness: 20 }}
                        />

                        <Button
                            mode="contained"
                            style={styles.boton}
                            labelStyle={styles.botonTexto}
                            onPress={registrarUsuario}>
                            REGISTRARSE

                        </Button>


                        <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 15 }}>
                            ¿Ya tienes cuenta?{' '}
                            <Text style={styles.registrarTexto} onPress={() => router.push('/')}>
                                Iniciar Sesión
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
        marginTop: 20,
    },
    botonTexto: {
        fontWeight: 'bold',
        fontSize: 18,
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