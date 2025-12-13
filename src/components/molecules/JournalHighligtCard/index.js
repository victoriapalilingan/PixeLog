import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PixelText from '../../atoms/PixelText';
import PixelIcon from '../../atoms/PixelIcon';

const JournalHighlightCard = () => {
  return (
    <LinearGradient
      colors={['rgba(84,124,175,0.75)', '#95C1DD', '#BBE2EF']}
      locations={[0, 0.32, 0.63]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.gradientFrame}>
      {/* ===== Header Bar ===== */}
      <View style={styles.headerBar}>
        <PixelIcon
          source={require('../../../assets/Plus.png')}
          size={20}
          style={styles.headerIcon}
        />
        <PixelText variant="pixel" style={styles.headerText}>
          My Journal
        </PixelText>
      </View>

      {/* ===== Inner White Card ===== */}
      <View style={styles.innerCard}>
        <View style={styles.contentRow}>
          {/* Text */}
          <View style={styles.textSection}>
            <PixelText variant="pixel" style={styles.mainText}>
              Let's{'\n'}Start{'\n'}Your Day
            </PixelText>
          </View>

          {/* Illustration */}
          <View style={styles.illustrationSection}>
            <Image
              source={require('../../../assets/smiley.png')}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default JournalHighlightCard;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  /* ===== Gradient Frame ===== */
  gradientFrame: {
    width: 370,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    minHeight: 200,
  },

  /* ===== Header ===== */
  headerBar: {
    width: 370,
    height: 34,
    backgroundColor: '#E5F9FF',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 14,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,

    marginLeft: -10,
    marginTop: -10,
    marginBottom: 10,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'PixelifySans-Regular',
  },

  /* ===== Inner Card ===== */
  innerCard: {
    width: 350,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    padding: 18,
    minHeight: 140,
  },

  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  /* ===== Text ===== */
  textSection: {
    flex: 1,
  },
  mainText: {
    fontSize: 32,
    lineHeight: 40,
    color: '#000',
    fontFamily: 'PixelifySans-Regular',
    maxWidth: 160,
  },

  /* ===== Illustration ===== */
  illustrationSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  illustration: {
    width: 140,
    height: 140,
  },
});
