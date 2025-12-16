import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HomeHeader from '../../components/organism/HomeHeader';
import CheckerboardBackground from '../../components/molecules/CheckerdboardBackground';
import Gap from '../../components/atoms/Gap';
import JournalHighlightCard from '../../components/molecules/JournalHighligtCard';
import QuickActionsGrid from '../../components/organism/QuickActionsGrid';
import RecentLogsSection from '../../components/organism/RecentLogsSection';
import BottomNavigation from '../../components/organism/BottomNavigation';

const NAV_HEIGHT_GUESS = 70;

// Mock hook untuk data
const useHomeData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({userName: 'Victoria'});
      setLoading(false);
    }, 1000);
  }, []);

  return {loading, data};
};

const HomeScreen = ({navigation}) => {
  const {loading, data} = useHomeData();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ActivityIndicator size="large" color="#547CAF" />
        <Text style={styles.loadingText}>Loading your diary...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* Background Gradient */}
      <CheckerboardBackground />
      <HomeHeader userName="Victoria" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Gap height={12} />

        <View style={styles.section}>
          <JournalHighlightCard />
        </View>
        <Gap height={16} />

        <QuickActionsGrid navigation={navigation} />

        <Gap height={20} />

        <RecentLogsSection />

        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F9FF',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 14,
    color: '#547CAF',
    fontFamily: 'PixelifySans-Bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 120, //
  },
  section: {
    paddingHorizontal: 16,
  },
});
