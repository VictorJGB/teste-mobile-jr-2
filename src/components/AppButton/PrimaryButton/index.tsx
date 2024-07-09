import React, { ReactNode } from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'
import styles from './styles'

type AppButtonProps = {
  children: ReactNode
}

export default function PrimaryButton({
  children,
  style,
  ...props
}: AppButtonProps & TouchableHighlightProps) {
  return (
    <TouchableHighlight
      style={[
        styles.container,
        style || {
          paddingVertical: 10,
          paddingHorizontal: 20,
        },
      ]}
      {...props}
    >
      {children}
    </TouchableHighlight>
  )
}
