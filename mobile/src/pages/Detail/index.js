import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import styles from '../Detail/styles';

import LogoImg from '../../assets/logo.png';

export default function Detail() {
    const route = useRoute();
    
    const incident = route.params.incident;

    const navigation = useNavigation();


    const message = `Olá ${incident.name}, gostaria de ajudar no caso "${incident.title}" com o valor de ${incident.value}.`;

    function navigateToHome() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg} />

                <TouchableOpacity style={styles.button} onPress={navigateToHome}>
                    <Feather name='arrow-left' size={24} color='#e02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <View style={styles.incidentHeader}>
                    <View>
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
                    </View>
                    <View style={{ right: 24 }}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}, {incident.city} - {incident.uf}</Text>
                    </View>
                </View>

                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={styles.contact}>
                <Text style={styles.contactTitle}>
                    Salve o dia!
                </Text>
                <Text style={styles.contactTitle}>
                    Seja o herói desse caso!
                </Text>

                <Text style={styles.contactText}>Entre em contato:</Text>

                <View style={styles.contactButtons}>
                    <TouchableOpacity style={styles.contactButton} onPress={sendWhatsapp}>
                        <Text style={styles.contactButtonText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contactButton} onPress={sendMail}>
                        <Text style={styles.contactButtonText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}