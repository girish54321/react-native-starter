import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors } from 'Config/Colors';
const LANGS = [
  { lngCode: 'en', label: 'English' },
  { lngCode: 'hi', label: 'हिन्दी' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const selectedLngCode = i18n.language;
  const setLng = (lngCode: string) => i18n.changeLanguage(lngCode);

  return (
    <View style={styles.container}>
      {LANGS.map((l) => {
        const selected = l.lngCode === selectedLngCode;
        return (
          <TouchableOpacity disabled={selected} onPress={() => setLng(l.lngCode)}>
            <View style={[styles.button, { backgroundColor: selected ? Colors?.gray : Colors.primary }]}>
              <Text style={styles.buttonText}>Change language ({l.label})</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  container: {
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  select: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedRow: {
    backgroundColor: 'gray',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  selectedText: {
    // color: 'rgb(231, 232, 235)',
  },

});
