import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.backgroundIce,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  topNavigation: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 17,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationInput: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 13,
    paddingLeft: 16,
    borderColor: Theme.colors.input.border,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Theme.colors.input.background,
    color: Theme.colors.input.textColor,
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.regular,
  },

  scrollView: {
    backgroundColor: Theme.colors.background,
    borderRadius: 8,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginHorizontal: 16,
  },
})
