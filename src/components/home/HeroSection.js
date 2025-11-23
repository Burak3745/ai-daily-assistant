import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

const HeroSection = () => {
    return (
        <View style={styles.heroSection}>
            <Image
                source={{ uri: 'https://img.icons8.com/clouds/200/book.png' }}
                style={styles.heroImage}
            />
            <Title style={styles.heroTitle}>AI Günlük Asistanım</Title>
            <Paragraph style={styles.heroSubtitle}>
                Duygularını anlayan, seni dinleyen ve sana özel tavsiyeler veren dijital dostun.
            </Paragraph>
        </View>
    );
};

const styles = StyleSheet.create({
    heroSection: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#f3f0ff',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginBottom: 20,
    },
    heroImage: { width: 120, height: 120, marginBottom: 15 },
    heroTitle: { fontSize: 28, fontWeight: 'bold', color: '#333', textAlign: 'center' },
    heroSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 24,
        maxWidth: 300
    },
});

export default HeroSection;