import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import { TESTIMONIALS, DAILY_QUOTE } from '../data/homeData';

import HeroSection from '../components/home/HeroSection';
import QuoteSection from '../components/home/QuoteSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import HomeActionButtons from '../components/home/HomeActionButtons';

const HomeScreen = ({ onNavigate }) => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      
      <HeroSection />

      <QuoteSection quote={DAILY_QUOTE} />

      <FeaturesSection />

      <TestimonialsSection data={TESTIMONIALS} />

      <HomeActionButtons onNavigate={onNavigate} />

      <Text style={styles.footerText}>v1.0.0 • Gizlilik Odaklı & Ücretsiz</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  footerText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 12,
    marginTop: 10,
  },
});

export default HomeScreen;