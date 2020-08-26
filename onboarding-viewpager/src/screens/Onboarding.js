import React from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Page from '../components/Page';

const Onboarding = () => {
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }}>
        <View key="1">
          <Page
            backgroundColor="#ffc93c"
            iconName="sun"
            title="Welcome to the weather app"
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#07689f"
            iconName="cloud-drizzle"
            title="Get updates on weather"
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
