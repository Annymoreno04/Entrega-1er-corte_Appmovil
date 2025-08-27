import React, { useState } from 'react';
import { View, Image, ScrollView, ImageBackground } from 'react-native';
import { Text, Button, ActivityIndicator } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function PantallaBienvenida() {
    const router = useRouter();
    const [cargando, setCargando] = useState(false);

    const handleEmpezar = () => {
        setCargando(true);

        setTimeout(() => {
            setCargando(false);
            router.push('home');
        }, 1000);
    };

    return (
        <>
            <Stack.Screen options={{
                title: 'Pantalla Principal',
                headerShown: true,
                headerStyle: { backgroundColor: '#f9f8ff' },
            }} />

            <ImageBackground
                source={{ uri: 'https://i.pinimg.com/736x/2b/c9/8e/2bc98e60d1b09ec2fca777ced9dab564.jpg' }}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <ScrollView style={{ backgroundColor: 'rgba(249, 248, 255, 0.7)' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', minHeight: '85%' }}>

                        <Text variant="headlineMedium"
                            style={{ fontWeight: 'bold', marginBottom: 8, textAlign: 'center', fontSize: 36, marginTop: 50 }}>
                            ¡Bienvenid@s!
                        </Text>

                        <Text variant="bodyMedium" style={{ color: '#666', marginBottom: 20, textAlign: 'center', fontSize: 18, width: '80%', alignSelf: 'center' }}>
                            ¡Nos alegra tenerte aquí!{"\n"}
                            Descubre lo mejor en uñas, estilos y tendencias con nosotros💅✨
                        </Text>

                        <Image
                            source={require("../assets/img/logoUno.png")}
                            style={{
                                width: '90%',
                                height: 300,
                                alignSelf: "center",
                                marginTop: 15,
                            }}
                        />

                        {cargando ? (
                            <ActivityIndicator
                                animating={true}
                                size="large"
                                color="#dc8fbe"
                                style={{ marginTop: 30 }}
                            />
                        ) : (
                            <Button
                                mode="contained"
                                onPress={handleEmpezar}
                                style={{ backgroundColor: '#dc8fbeff', width: '60%', marginTop: 20, alignSelf: "center", height: 50, borderRadius: 30, paddingVertical: 5 }}
                                labelStyle={{ color: '#ffffff', fontSize: 22, fontWeight: 'bold' }}
                            >
                                Empezar
                            </Button>
                        )}


                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    );
}
