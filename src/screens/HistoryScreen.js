import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { AppContext } from '../context/AppContext';
import { getTurkeyDate } from '../utils/dateHelpers';
import SentimentCard from '../components/common/SentimentCard';

const HistoryScreen = () => {
  const { entries } = useContext(AppContext);

  const currentWeekEntries = entries.filter(item => {
    const itemDateTR = getTurkeyDate(item.date);
    const nowTR = getTurkeyDate(new Date());
    const currentDay = nowTR.getDay(); 
    const diffToMonday = currentDay === 0 ? 6 : currentDay - 1;
    const startOfWeek = new Date(nowTR);
    startOfWeek.setDate(nowTR.getDate() - diffToMonday);
    startOfWeek.setHours(0, 0, 0, 0);
    return itemDateTR >= startOfWeek;
  });

  const renderItem = ({ item }) => (
    <SentimentCard 
      entry={item} 
      showDate={true} 
      showOriginalText={true} 
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Bu Haftanın Özeti (Pzt - Paz)</Text>
        <Text style={styles.subHeader}>Her Pazartesi sıfırlanır</Text>
      </View>

      {currentWeekEntries.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={{ textAlign: 'center', color: '#666' }}>
            Bu hafta henüz bir giriş yapmadın.{'\n'}
            Yeni bir hafta, yeni bir başlangıç! 🚀
          </Text>
        </View>
      ) : (
        <FlatList
          data={currentWeekEntries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  headerContainer: { padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  subHeader: { fontSize: 12, color: '#888', marginTop: 4 },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});

export default HistoryScreen;