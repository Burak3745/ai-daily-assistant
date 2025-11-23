import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph, Text, Surface } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FeaturesSection = () => {
    return (
        <View style={styles.featuresContainer}>
            <Text style={styles.sectionTitle}>Neler Yapabilirsin?</Text>

            <Surface style={styles.featureCard}>
                <MaterialCommunityIcons name="robot-happy-outline" size={40} color="#6200ee" />
                <View style={styles.featureTextContainer}>
                    <Title style={styles.featureTitle}>Duygu Analizi</Title>
                    <Paragraph style={styles.featureDesc}>
                        Yazdıklarını AI ile analiz et, gününün duygu haritasını çıkar.
                    </Paragraph>
                </View>
            </Surface>

            <Surface style={styles.featureCard}>
                <MaterialCommunityIcons name="history" size={40} color="#03dac6" />
                <View style={styles.featureTextContainer}>
                    <Title style={styles.featureTitle}>Haftalık Takip</Title>
                    <Paragraph style={styles.featureDesc}>
                        Geçmiş kayıtlarına dönüp bak, haftalık ruh halini incele.
                    </Paragraph>
                </View>
            </Surface>
        </View>
    );
};

const styles = StyleSheet.create({
    featuresContainer: { paddingHorizontal: 20, marginBottom: 10 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333', marginLeft: 5 },
    featureCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 2,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    featureTextContainer: { marginLeft: 15, flex: 1 },
    featureTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    featureDesc: { fontSize: 13, color: '#666', marginTop: 4 },
});

export default FeaturesSection;