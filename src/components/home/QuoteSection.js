import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuoteSection = ({ quote }) => {
    return (
        <View style={styles.quoteContainer}>
            <Surface style={styles.quoteCard}>
                <MaterialCommunityIcons name="format-quote-open" size={30} color="#6200ee" style={styles.quoteIcon} />
                <Text style={styles.quoteText}>"{quote.text}"</Text>
                <Text style={styles.quoteAuthor}>- {quote.author}</Text>
            </Surface>
        </View>
    );
};

const styles = StyleSheet.create({
    quoteContainer: { paddingHorizontal: 20, marginBottom: 25, marginTop: -25 },
    quoteCard: {
        marginTop: 30,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 6,
        shadowColor: '#6200ee',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        alignItems: 'center',
    },
    quoteIcon: { marginBottom: 10, opacity: 0.5 },
    quoteText: { fontSize: 16, fontStyle: 'italic', textAlign: 'center', color: '#444', marginBottom: 10 },
    quoteAuthor: { fontSize: 14, fontWeight: 'bold', color: '#6200ee' },
});

export default QuoteSection;