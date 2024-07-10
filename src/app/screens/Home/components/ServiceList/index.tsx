// react
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

// styles
import Theme from '@/styles/Theme'
import styles from './styles'

// components
import HeaderButton from './components/HeaderButton'

// icons
import ServiceList from '@/app/types/ServiceList'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import ServiceCard from './components/ServiceCard'

type serviceListProps = {
  data: ServiceList
}

export default function ServiceListComponent({ data }: serviceListProps) {
  const [layoutType, setLayoutType] = useState<'list' | 'grid'>('list')

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <View style={styles.line} />
          <Text style={styles.headerText}>{data.category}</Text>
        </View>
        {/* button group */}
        <View style={styles.buttonGroup}>
          <HeaderButton
            style={
              layoutType === 'list' && {
                shadowColor: Theme.shadows.base.color,
                shadowOffset: Theme.shadows.base.offset,
                shadowRadius: Theme.shadows.base.blur,
                shadowOpacity: Theme.shadows.base.opacity,
              }
            }
            onPress={() => setLayoutType('list')}
          >
            <Feather
              name="list"
              size={20}
              color={
                layoutType === 'list'
                  ? Theme.colors.primary.background
                  : '#9A9FA5'
              }
            />
          </HeaderButton>
          <HeaderButton
            style={
              layoutType === 'grid' && {
                shadowColor: Theme.shadows.base.color,
                shadowOffset: Theme.shadows.base.offset,
                shadowRadius: Theme.shadows.base.blur,
                shadowOpacity: Theme.shadows.base.opacity,
              }
            }
            onPress={() => setLayoutType('grid')}
          >
            <MaterialIcons
              name="grid-on"
              size={20}
              color={
                layoutType === 'grid'
                  ? Theme.colors.primary.background
                  : '#9A9FA5'
              }
            />
          </HeaderButton>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {data.services.map((service, index) => {
          return <ServiceCard key={index} data={service} />
        })}
      </ScrollView>
    </View>
  )
}
