import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';
import PixelText from '../../atoms/PixelText';

const PixelLoadingBar = ({onComplete}) => {
  const TOTAL_BLOCKS = 8;
  const blockAnims = useRef(
    Array.from({length: TOTAL_BLOCKS}, () => new Animated.Value(0)),
  ).current;

  const doneRef = useRef(false);

  useEffect(() => {
    doneRef.current = false;

    // reset
    blockAnims.forEach(a => a.setValue(0));

    // animasi isi 8 kotak sekali
    const animations = blockAnims.map((anim, index) =>
      Animated.sequence([
        Animated.delay(index * 150),
        Animated.timing(anim, {
          toValue: 1,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]),
    );

    Animated.parallel(animations).start(({finished}) => {
      if (!finished) return;
      if (doneRef.current) return;

      doneRef.current = true;

      // kasih sedikit jeda biar user sempat lihat "penuh"
      setTimeout(() => {
        onComplete && onComplete();
      }, 150);
    });

    return () => {
      doneRef.current = true;
    };
  }, [blockAnims, onComplete]);

  return (
    <View style={styles.loadingBarWrapper}>
      <PixelText variant="pixel" style={styles.loadingText}>
        LOADING....
      </PixelText>

      <View style={styles.loadingBarContainer}>
        <View style={styles.loadingBarOuter}>
          <View style={styles.blocksContainer}>
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

      <PixelText variant="pixel" style={styles.pleaseWaitText}>
        Please wait....
      </PixelText>
    </View>
  );
};

export default PixelLoadingBar;

const styles = StyleSheet.create({
  loadingBarWrapper: {alignItems: 'center'},
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
  loadingBarContainer: {width: 260},
  loadingBarOuter: {
    borderWidth: 3,
    borderColor: '#547CAF',
    padding: 3,
    backgroundColor: '#E5F9FF',
  },
  blocksContainer: {flexDirection: 'row', gap: 3},
  block: {flex: 1, height: 20},
});
