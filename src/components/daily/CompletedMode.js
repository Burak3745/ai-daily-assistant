import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';
import SentimentCard from '../common/SentimentCard';

const CompletedMode = ({ entry }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.header}>Bugünlük bu kadar! 🎉</Title>
      <Text style={styles.subHeader}>
        Günlük analizini tamamladın. Yarın tekrar görüşmek üzere.
      </Text>

      <SentimentCard 
        entry={entry} 
        showDate={false} 
        showOriginalText={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', width: '100%' },
  header: { fontSize: 24, marginBottom: 10, textAlign: 'center', color: '#333', fontWeight: 'bold' },
  subHeader: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
});

export default CompletedMode;