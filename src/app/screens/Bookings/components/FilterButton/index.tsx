import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

// styles
import Theme from '@/styles/Theme'
import styles from './styles'

type Props = TouchableOpacityProps & {
  title: string
  isSelected: boolean
}

export default function FilterButton({ title, isSelected, ...props }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? '#6759FF1A' : Theme.colors.background,
        },
      ]}
      {...props}
    >
      <Text
        style={[
          styles.buttonTitle,
          {
            color: isSelected ? Theme.colors.primary.background : '#535763',
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
