import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const DailyInputMode = ({ text, setText, onAnalyze, analyzing }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.header}>Bugün nasıl hissediyorsun?</Title>
      
      <TextInput
        mode="outlined"
        label="Günlüğüne yaz..."
        placeholder="Bugün proje üzerinde çalıştım ve harika hissediyorum..."
        multiline
        numberOfLines={6}
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <Button 
        mode="contained" 
        onPress={onAnalyze} 
        loading={analyzing}
        disabled={analyzing || !text.trim()}
        style={styles.button}
        icon="magic-staff"
        contentStyle={{ paddingVertical: 8 }}
      >
        {analyzing ? 'Analiz Ediliyor...' : 'AI ile Analiz Et'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%' },
  header: { fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#333', fontWeight: 'bold' },
  input: { marginBottom: 20, backgroundColor: '#fff' },
  button: { marginBottom: 20, borderRadius: 8 },
});

export default DailyInputMode;