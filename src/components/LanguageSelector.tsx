import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors } from 'Config/Colors';
const { width } = Dimensions.get('window');
const LANGS = [
  { lngCode: 'en', label: 'English' },
  { lngCode: 'hi', label: 'हिन्दी' },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const selectedLngCode = i18n.language;
  const setLng = (lngCode: string) => i18n.changeLanguage(lngCode);

  return (
    <View style={styles.container}>
      {/* <List.Accordion
        title={t('languageSelector:selectLng')}
        expanded={expanded}
        onPress={handlePress}
        left={props => <List.Icon {...props} icon="translate" style={{ marginLeft: 6 }} />}>
        {LANGS.map((l) => {
          const selected = l.lngCode === selectedLngCode;
          return (
            <List.Item
              disabled={selected}
              key={l.lngCode}
              onPress={() => setLng(l.lngCode)}
              title={l.label}
              right={props => selected ? <List.Icon {...props} color={Colors.primary} icon={"check"} /> : null}
            />
          );
        })}
      </List.Accordion> */}
      <Text>Lag</Text>
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  container: {
    width: width
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
  selectedText: {
    // color: 'rgb(231, 232, 235)',
  },

});
