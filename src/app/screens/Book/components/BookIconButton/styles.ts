import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bookButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  bookIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 18,
    borderColor: '#D1D3D4',
    padding: 20,
  },
  bookButtonText: {
    fontSize: Theme.fonts.sizes.smAlternative,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: Theme.colors.black,
  },
})

export default styles
