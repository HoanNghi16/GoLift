import { Stack } from 'expo-router';
import React from 'react';

import PrimaryHeader from '@/components/layout/header';
import PrimaryTabBar from '@/components/layout/primaryTabBar';
import { useColor } from '@/hooks/colorProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  const {colors} = useColor()
  return (
    <>
      <SafeAreaView edges={['top']}>
        <PrimaryHeader variant='main'/>
      </SafeAreaView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
      </Stack>
      <SafeAreaView edges={['bottom']} style={{backgroundColor: colors.surface}}>
        <PrimaryTabBar/>
      </SafeAreaView>
    </>
  );
}
