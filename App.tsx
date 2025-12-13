/**
 * Font Test App
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>PIXELIFY FONT TEST</Text>

      <Text style={styles.subtitle}>Jika font ini pixel → BERHASIL</Text>

      <Text style={styles.normal}>PixelifySans-Bold.ttf</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  // ❌ TIDAK pakai fontWeight
  title: {
    fontFamily: 'PixelifySans-Bold',
    fontSize: 32,
    color: '#000',
  },

  subtitle: {
    fontFamily: 'PixelifySans-Bold',
    fontSize: 20,
    marginTop: 12,
    color: '#333',
  },

  normal: {
    fontFamily: 'PixelifySans-Bold',
    fontSize: 16,
    marginTop: 8,
    color: '#666',
  },
});

export default App;
