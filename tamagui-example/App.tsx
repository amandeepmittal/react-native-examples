import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { YStack, Text, XStack, useMedia } from 'tamagui';

import Tamagui from './tamagui.config';

export default function App() {
  const media = useMedia();
  return (
    <Tamagui.Provider defaultTheme='light'>
      <StatusBar style='dark' />
      <XStack f={1} ai='center' jc='center' bg='$bg'>
        <YStack
          space='$2'
          width={200}
          height={100}
          p={10}
          bg={media.md ? 'red' : 'yellow'}
        >
          <Text fontSize={media.md ? 32 : 20} marginBottom={20}>
            Tamagui
          </Text>
          <Text fontSize={20}>React Native</Text>
        </YStack>
      </XStack>
    </Tamagui.Provider>
  );
}
