import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './styles'

type headerButtonProps = {
  children: ReactNode
}

export default function HeaderButton({
  children,
  style,
  ...props
}: headerButtonProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} {...props}>
      {children}
    </TouchableOpacity>
  )
}
