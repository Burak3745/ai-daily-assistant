import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, Keyboard } from 'react-native';
import { AppContext } from '../context/AppContext';
import { analyzeText } from '../api/hf_api';
import { isSameDayTurkey } from '../utils/dateHelpers';

import DailyInputMode from '../components/daily/DailyInputMode';
import CompletedMode from '../components/daily/CompletedMode';

const DailyScreen = () => {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const { addEntry, entries } = useContext(AppContext);
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const todayEntry = entries.find(e => isSameDayTurkey(e.date, currentDate));

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    Keyboard.dismiss();
    setAnalyzing(true);

    try {
      const data = await analyzeText(text);
      await addEntry(data);
      setText('');
    } catch (error) {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todayEntry ? (
        <CompletedMode entry={todayEntry} />
      ) : (
        <DailyInputMode 
          text={text} 
          setText={setText} 
          onAnalyze={handleAnalyze} 
          analyzing={analyzing} 
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20, 
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});

export default DailyScreen;