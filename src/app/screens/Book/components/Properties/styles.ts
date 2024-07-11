import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
