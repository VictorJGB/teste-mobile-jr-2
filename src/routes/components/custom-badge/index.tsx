import React, { ReactNode } from 'react'
import { View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import Theme from '@/styles/Theme'

type CustomBadgeProps = {
  tabBarIcon: ReactNode
}

export default function CustomBadge({
  tabBarIcon: TabBarIcon,
}: CustomBadgeProps) {
  return (
    <View>
      <FontAwesome
        name="circle"
        size={12}
        color={Theme.colors.primary.background}
        style={{
          backgroundColor: `${Theme.colors.accent.background}`,
          width: 'auto',
        }}
      />
      {TabBarIcon}{' '}
    </View>
  )
}
