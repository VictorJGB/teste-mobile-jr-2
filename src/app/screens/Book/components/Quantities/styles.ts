import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  numberContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numbersTitle: {
    fontSize: 16,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: Theme.colors.black,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
})

export default styles
