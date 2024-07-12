import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  noContentText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  noContentTitle: {
    fontFamily: Theme.fonts.fontFamily.bold,
    fontSize: Theme.fonts.sizes['heading-2'],
    color: Theme.colors.black,
  },
  noContentParagraph: {
    fontFamily: Theme.fonts.fontFamily.medium,
    fontSize: Theme.fonts.sizes.base,
    color: '#535763',
    textAlign: 'center',
  },
})

export default styles
