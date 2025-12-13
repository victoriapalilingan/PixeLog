import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Easing, Dimensions} from 'react-native';
import PixelText from '../../atoms/PixelText';

const {width} = Dimensions.get('window');

const PixelLoadingBar = ({
  totalBlocks = 8,
  blockDelay = 150,
  blockDuration = 200,
  loopDelay = 250,
}) => {
  const blockAnims = useRef(
    Array.from({length: totalBlocks}, () => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const animateBlocks = () => {
      if (!isMounted) return;

      blockAnims.forEach(anim => anim.setValue(0));

      const animations = blockAnims.map((anim, index) =>
        Animated.sequence([
          Animated.delay(index * blockDelay),
          Animated.timing(anim, {
            toValue: 1,
            duration: blockDuration,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
        ]),
      );

      Animated.parallel(animations).start(() => {
        if (!isMounted) return;
        timeoutId = setTimeout(animateBlocks, loopDelay);
      });
    };

    animateBlocks();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [blockAnims, blockDelay, blockDuration, loopDelay]);

  return (
    <View style={styles.wrapper}>
      <PixelText style={styles.loadingText}>LOADING....</PixelText>

      <View style={styles.barContainer}>
        <View style={styles.barOuter}>
          <View style={styles.blocksRow}>
            {blockAnims.map((anim, index) => {
              const backgroundColor = anim.interpolate({
                inputRange: [0, 1],
                outputRange: ['transparent', '#547CAF'],
              });

              return (
                <Animated.View
                  key={index}
                  style={[styles.block, {backgroundColor}]}
                />
              );
            })}
          </View>
        </View>
      </View>

      <PixelText style={styles.pleaseWaitText}>Please wait....</PixelText>
    </View>
  );
};

export default PixelLoadingBar;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },

  loadingText: {
    fontSize: 14,
    color: '#547CAF',
    marginBottom: 2,
    letterSpacing: 2,
  },
  pleaseWaitText: {
    fontSize: 11,
    color: '#547CAF',
    marginTop: 4,
    letterSpacing: 1,
  },

  barContainer: {
    width: width * 0.65,
  },
  barOuter: {
    borderWidth: 3,
    borderColor: '#547CAF',
    padding: 3,
    backgroundColor: '#E5F9FF',
  },
  blocksRow: {
    flexDirection: 'row',
    gap: 3,
  },
  block: {
    flex: 1,
    height: 20,
    backgroundColor: 'transparent',
  },
});
