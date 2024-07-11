import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: Theme.colors.background,
  },
  billContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  billTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  billTotalText: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: '#6F767E',
  },
  billPrice: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.black,
  },
  billDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },
  billDetailLabel: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: '#FC944D',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  draftButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FCFCFC',
    borderWidth: 2,
    borderColor: '#EFEFEF',
    borderRadius: 12,
  },
  draftButtonText: {
    fontSize: Theme.fonts.sizes.baseAlternative,
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.black,
  },
  submitButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.primary.background,
    borderColor: Theme.colors.primary.background,
    borderWidth: 2,
    borderRadius: 12,
  },
  submitButtonText: {
    fontSize: Theme.fonts.sizes.baseAlternative,
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.background,
  },
})

export default styles
