import { Tabs } from 'expo-router';
import React from 'react';

import PrimaryHeader from '@/components/layout/header';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColor } from '@/hooks/colorProvider';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {colors} = useColor()

  return (
    <>
        <SafeAreaView edges={['top']}>
          <PrimaryHeader variant='main'/>
        </SafeAreaView>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
            tabBarStyle:{
              borderTopColor: colors.background,
              backgroundColor: colors.background,
            }
          }}>
            
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
            }}
          />
        </Tabs>
      </>
  );
}
