import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import HomeGreeting from '../../molecules/HomeGreeting';
import CalendarStrip from '../../molecules/CalenderStrip';
import Gap from '../../atoms/Gap';

const HomeHeader = ({userName}) => {
  const [activeDate, setActiveDate] = useState(9); // ✅ default selected

  const handleSelectDate = date => {
    setActiveDate(date); // ✅ update state -> UI otomatis berubah
  };

  return (
    <View style={styles.container}>
      <HomeGreeting userName={userName} />
      <Gap height={12} />
      <CalendarStrip activeDate={activeDate} onSelectDate={handleSelectDate} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 50,
  },
});
