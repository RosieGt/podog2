import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'
export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animation.Image
                animation="flipInY"
                source={require('../../assets/logo_podo.png')}
                style={{ width: '100%'}}
                resizeMode="contain"
                />
            </View>
            <Animatable.View deLay={600} animation="fadeInUp" style={styles.containerFom}>
                <Text style={styles.title}>Encontre os melhores Podologo aqui</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hall')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerFom: {
        flex:1,
        backgroundColor: 'fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

})