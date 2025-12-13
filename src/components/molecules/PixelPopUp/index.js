import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Backdrop from '../../atoms/BackDrop';
import Button from '../../atoms/Button';

const PixelPopup = ({
  visible,
  onClose,

  title = 'REGISTRASI BERHASIL!',
  message = 'Selamat datang di SU.NET! Akun Anda telah aktif. Selamat berselancar!',
  buttonLabel = 'OKAY!',

  theme = 'success', // success, info, warning, error

  // optional callback kalau butuh action setelah close
  onButtonPress,

  // optional: kalau button atom kamu support ini
  buttonWidth = 260,
  buttonHeight = 56,
}) => {
  if (!visible) return null;

  const themes = {
    success: {
      frameBg: '#96CAE8', // soft pastel blue (dari gradient 61%)
      frameBorder: '#547CAF', // deep blue (dari gradient 0%)
      buttonBg: '#709FCB', // mid blue (25%)
      buttonBorder: '#547CAF', // deep blue biar tegas
      icon: '⭐',
    },
    info: {
      frameBg: '#22D3EE', // cyan-400
      frameBorder: '#0891B2', // cyan-600
      buttonBg: '#06B6D4', // cyan-500
      buttonBorder: '#0E7490', // cyan-700
      icon: 'ℹ️',
    },
    warning: {
      frameBg: '#FACC15', // yellow-400
      frameBorder: '#CA8A04', // yellow-600
      buttonBg: '#EAB308', // yellow-500
      buttonBorder: '#A16207', // yellow-700
      icon: '⚠️',
    },
    error: {
      frameBg: '#F87171', // red-400
      frameBorder: '#DC2626', // red-600
      buttonBg: '#EF4444', // red-500
      buttonBorder: '#B91C1C', // red-700
      icon: '❌',
    },
  };

  const t = themes[theme] || themes.success;

  const handlePress = () => {
    onClose && onClose();
    onButtonPress && onButtonPress();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <Backdrop visible={visible} onPress={onClose} />

      <View style={styles.center}>
        {/* Outer Frame */}
        <View
          style={[
            styles.frame,
            {backgroundColor: t.frameBg, borderColor: t.frameBorder},
          ]}>
          {/* Decorative emojis outside frame */}
          <Text style={[styles.floatEmoji, {top: -10, left: -10}]}>🎮</Text>
          <Text style={[styles.floatEmoji, {top: -10, right: -10}]}>✨</Text>
          <Text style={[styles.floatEmoji, {bottom: -10, left: -10}]}>🎉</Text>
          <Text style={[styles.floatEmoji, {bottom: -10, right: -10}]}>🎊</Text>

          {/* Header Bar */}
          <View style={styles.headerBar}>
            <Text style={styles.headerUrl}>PixeLog</Text>

            <View style={styles.headerButtons}>
              <TouchableOpacity activeOpacity={0.7} style={styles.headerBtn}>
                <Text style={styles.headerBtnText}>−</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onClose}
                activeOpacity={0.7}
                style={styles.headerBtn}>
                <Text style={styles.headerBtnText}>×</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Content Card */}
          <View style={styles.contentCard}>
            {/* Floating decorations inside */}
            <Text style={[styles.innerEmoji, {top: 8, left: 8}]}>💚</Text>
            <Text style={[styles.innerEmoji, {top: 14, right: 36}]}>✨</Text>
            <Text style={[styles.innerEmojiSmall, {top: 30, right: 16}]}>
              ⭐
            </Text>
            <Text style={[styles.innerEmoji, {bottom: 16, left: 16}]}>🎉</Text>
            <Text style={[styles.innerEmojiSmall, {bottom: 28, right: 24}]}>
              🎊
            </Text>

            {/* Title row */}
            <View style={styles.titleRow}>
              <Text style={styles.bigIcon}>{t.icon}</Text>
              <Text style={styles.title}>{title}</Text>
            </View>

            <Text style={styles.message}>{message}</Text>

            {/* Button */}
            <View style={styles.buttonWrap}>
              <Button
                label={buttonLabel}
                onPress={handlePress}
                width={buttonWidth}
                height={buttonHeight}
                color={t.buttonBg}
                borderColor={t.buttonBorder}
                textColor="#FFFFFF"
                fontSize={18}
                borderWidth={4}
                radius={12}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PixelPopup;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  frame: {
    width: 340,
    borderWidth: 8,
    borderRadius: 12,
    overflow: 'visible',
  },

  headerBar: {
    height: 40,
    backgroundColor: '#E5F9FF', // header tetap biru seperti contoh
    borderBottomWidth: 4,
    borderBottomColor: '#6896D1',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerUrl: {
    color: '#0000',
    fontSize: 10,
    // kalau kamu punya font pixel, pakai di sini:
    // fontFamily: 'PressStart2P-Regular',
  },

  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },

  headerBtn: {
    width: 24,
    height: 24,
    backgroundColor: '#6896D1',
    borderWidth: 2,
    borderColor: '#0000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'PixelifySans-Bold',
  },

  contentCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#D1D5DB',
    margin: 14,
    borderRadius: 10,
    padding: 16,
    overflow: 'hidden',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },

  bigIcon: {
    fontSize: 22,
    marginTop: 2,
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    lineHeight: 22,
    fontFamily: 'PixelifySans-Bold',
  },

  message: {
    fontSize: 12,
    color: '#374151',
    lineHeight: 18,
    marginBottom: 16,
    fontFamily: 'PixelifySans-Bold',
    // fontFamily: 'PressStart2P-Regular',
  },

  buttonWrap: {
    alignItems: 'center',
  },

  // Outer floating emojis
  floatEmoji: {
    position: 'absolute',
    fontSize: 20,
  },

  // Inner floating emojis
  innerEmoji: {
    position: 'absolute',
    fontSize: 16,
    opacity: 0.95,
  },
  innerEmojiSmall: {
    position: 'absolute',
    fontSize: 12,
    opacity: 0.95,
  },
});
