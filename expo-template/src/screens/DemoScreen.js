import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppearance } from '../hooks';
import { Button, IconButton, Input } from '../components';
import { colors } from '../constants';

export default function DemoScreen() {
  const theme = useAppearance();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>Demo Screen Placeholder</Text>
        <Button
          title='Solid'
          backgroundColor={colors.primary}
          containerStyle={styles.button}
        />
        <Button
          title='Outline'
          outline
          titleColor={colors.secondary}
          containerStyle={styles.button}
          width='75%'
        />
        <View style={styles.section}>
          <IconButton
            variant='MaterialCommunityIcons'
            iconName='rocket-launch'
            color={colors.primary}
            size={28}
          />
          <IconButton
            variant='AntDesign'
            iconName='rocket1'
            color={colors.secondary}
            size={28}
          />
        </View>
        <Input
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: '#fff',
            marginBottom: 20
          }}
          leftIcon='email'
          iconVariant='MaterialCommunityIcons'
          placeholder='Enter email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    paddingHorizontal: 16
  },
  text: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: '600'
  },
  button: {
    marginTop: 20
  },
  section: {
    paddingVertical: 18,
    flexDirection: 'row'
  }
});
