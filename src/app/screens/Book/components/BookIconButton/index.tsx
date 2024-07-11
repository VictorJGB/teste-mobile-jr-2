import React, { ReactNode } from 'react'
import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'
import styles from './styles'

type Props = TouchableOpacityProps & {
  children: ReactNode
  iconContainerStyle?: StyleProp<ViewStyle>
  text?: string
}

export default function BookIconButton({
  children,
  iconContainerStyle,
  text,
  ...props
}: Props) {
  return (
    <TouchableOpacity style={styles.bookButton} {...props}>
      <View style={[styles.bookIconContainer, iconContainerStyle]}>
        {children}
      </View>
      {text && <Text style={styles.bookButtonText}>{text}</Text>}
    </TouchableOpacity>
  )
}
