import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textarea: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#9A9FA540',
    borderRadius: 12,
    padding: 12,
    fontSize: Theme.fonts.sizes.base,
    color: Theme.colors.black,
    fontFamily: Theme.fonts.fontFamily.regular,
  },
})

export default styles
