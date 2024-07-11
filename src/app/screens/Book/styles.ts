import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Theme.colors.backgroundIce,
    position: 'relative',
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
  bookContainer: {
    width: '100%',
    zIndex: 2,
    position: 'absolute',
    top: 220,
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  bookContent: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Theme.colors.backgroundIce,
    gap: 16,
  },
  optionsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: Theme.colors.background,
    borderRadius: 8,
    padding: 16,
  },
})

export default styles
