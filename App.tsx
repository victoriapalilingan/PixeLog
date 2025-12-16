import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/pages/SplashScreen';
import AuthPage from './src/pages/AuthPage';

import MainTabs from './src/navigation/MainTabs';
import WriteJournalPage from './src/pages/WriteJournal';
import ViewEntriesPage from './src/pages/ViewEntries';
import SummaryPage from './src/pages/SummaryPage';
import MoodCheckPage from './src/pages/MoodCheckPage';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
    />

    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthPage} />
      <Stack.Screen name="ViewEntries" component={ViewEntriesPage} />
      <Stack.Screen name="SummaryPage" component={SummaryPage} />
      <Stack.Screen name="MoodCheckPage" component={MoodCheckPage} />

      {/* ✅ semua page yang pakai bottom nav taruh di sini */}
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="WriteJournalPage" component={WriteJournalPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
