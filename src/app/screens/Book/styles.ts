import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Theme.colors.backgroundIce,
  },
  ImageBackground: {
    width: '100%',
    height: 255,
    position: 'relative',
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
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  bookContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Theme.colors.background,
    gap: 16,
    padding: 16,
  },
  propertyContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  propertyHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    paddingVertical: 5,
  },
  line: {
    height: 20,
    width: 4,
    borderRadius: 4,
    backgroundColor: Theme.colors.headerTag,
  },
  headerTitle: {
    fontSize: Theme.fonts.sizes['heading-3'],
    fontFamily: Theme.fonts.fontFamily.semibold,
    color: Theme.colors.black,
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bookButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  bookIconContainer: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 18,
  },
  bookButtonText: {
    fontSize: Theme.fonts.sizes.smAlternative,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: Theme.colors.black,
  },
})

export default styles
