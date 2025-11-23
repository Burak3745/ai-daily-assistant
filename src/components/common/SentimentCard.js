import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text, List } from 'react-native-paper';
import { formatTurkeyDate } from '../../utils/dateHelpers';

const SentimentCard = ({ entry, showDate = false, showOriginalText = false }) => {
  
  const getSentimentColor = (sentiment) => {
    const s = sentiment?.toLowerCase() || "";
    if (s.includes('positive')) return '#d4edda';
    if (s.includes('negative')) return '#f8d7da';
    return '#e2e3e5';
  };

  const getIcon = (sentiment) => {
    const s = sentiment?.toLowerCase() || "";
    if (s.includes('positive')) return 'emoticon-happy-outline';
    if (s.includes('negative')) return 'emoticon-sad-outline';
    return 'emoticon-neutral-outline';
  };

  return (
    <Card style={[styles.card, { backgroundColor: getSentimentColor(entry.sentiment) }]}>
      <Card.Content>
        <View style={styles.row}>
          <List.Icon icon={getIcon(entry.sentiment)} style={{ margin: 0 }} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            {showDate && (
              <Title style={styles.date}>{formatTurkeyDate(entry.date)}</Title>
            )}
            <Title style={styles.sentimentTitle}>
               {entry.sentiment}
            </Title>
          </View>
        </View>

        {showOriginalText && (
           <Paragraph numberOfLines={3} style={styles.originalText}>
             "{entry.originalText}"
           </Paragraph>
        )}

        <View style={styles.divider} />

        <Paragraph style={styles.bold}>Özet:</Paragraph>
        <Paragraph style={styles.text}>{entry.summary}</Paragraph>
        
        <View style={{ height: 8 }} />
        
        <Paragraph style={styles.bold}>AI Önerisi:</Paragraph>
        <Paragraph style={styles.text}>{entry.recommendation}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 12, elevation: 2 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  sentimentTitle: { fontSize: 18, fontWeight: 'bold', textTransform: 'capitalize' },
  date: { fontSize: 12, color: '#666', marginBottom: 2 },
  originalText: { fontStyle: 'italic', color: '#444', marginBottom: 10 },
  divider: { height: 1, backgroundColor: 'rgba(0,0,0,0.1)', marginVertical: 10 },
  bold: { fontWeight: '700', fontSize: 14, color: '#333' },
  text: { fontSize: 14, color: '#222', lineHeight: 20 }
});

export default SentimentCard;