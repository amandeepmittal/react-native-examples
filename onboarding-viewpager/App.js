import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Onboarding from './src/screens/Onboarding';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Onboarding />
    </>
  );
}
