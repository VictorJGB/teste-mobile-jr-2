import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  ImageBackground: {
    width: '100%',
    height: 255,
  },

  gradient: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingBottom: 54,
    gap: 7,
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#FB9450',
    borderRadius: 112,
  },
  badgeText: {
    fontSize: Theme.fonts.sizes.sm,
    color: Theme.colors.background,
  },
  serviceTitle: {
    fontSize: Theme.fonts.sizes['xl-heading'],
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.background,
    maxWidth: '50%',
  },
})

export default styles
