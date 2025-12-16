import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/Home';
import WriteJournalPage from '../pages/WriteJournal';
import LogsPage from '../pages/LogsPage';
import ProfilePage from '../pages/ProfilePage';

import BottomNavigation from '../components/organism/BottomNavigation';

// ✅ pakai 1 icon saja (karena selected pakai rectangle/background)
import Home from '../assets/home.png';
import Write from '../assets/write.png';
import Logs from '../assets/logs.png';
import Profile from '../assets/profile.svg';

const Tab = createBottomTabNavigator();

const TAB_ITEMS = [
  {
    key: 'Home',
    label: 'Home',
    icon: Home,
  },
  {
    key: 'Write',
    label: 'Write',
    icon: Write,
  },
  {
    key: 'Logs',
    label: 'Logs',
    icon: Logs,
  },
  {
    key: 'Profile',
    label: 'Profile',
    icon: Profile,
  },
];

const CustomTabBar = ({state, navigation}) => {
  const activeKey = state.routes[state.index].name;

  const handleTabPress = key => {
    navigation.navigate(key);
  };

  return (
    <BottomNavigation
      items={TAB_ITEMS}
      activeKey={activeKey}
      onTabPress={handleTabPress}
    />
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Write" component={WriteJournalPage} />
      <Tab.Screen name="Logs" component={LogsPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default MainTabs;
