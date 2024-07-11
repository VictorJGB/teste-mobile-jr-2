import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    width: '100%',
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
})

export const globalStyles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: Theme.colors.background,
    borderRadius: 8,
    padding: 16,
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
})
