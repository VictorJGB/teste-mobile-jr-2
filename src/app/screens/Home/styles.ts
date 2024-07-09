import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  topNavigation: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 17,
    backgroundColor: Theme.colors.background,
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
})
