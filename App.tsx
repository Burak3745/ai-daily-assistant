import React, { useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Provider as PaperProvider, BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { AppProvider } from './src/context/AppContext';
import AppHeader from './src/components/common/AppHeader';

import HomeScreen from './src/screens/HomeScreen';
import DailyScreen from './src/screens/DailyScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const App = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Ana Sayfa', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'daily', title: 'Günlük', focusedIcon: 'notebook-edit', unfocusedIcon: 'notebook-edit-outline' },
    { key: 'history', title: 'Geçmiş', focusedIcon: 'history', unfocusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen onNavigate={setIndex} />,
    daily: DailyScreen,
    history: HistoryScreen,
  });

  return (
    <SafeAreaProvider>
      <AppProvider>
        <PaperProvider>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />

          <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

            <AppHeader />

            <View style={styles.contentContainer}>
              <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                barStyle={{ backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#eee' }}
                activeColor="#6200ee"
                sceneAnimationEnabled={true}
              />
            </View>

          </SafeAreaView>
        </PaperProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  }
});

export default App;