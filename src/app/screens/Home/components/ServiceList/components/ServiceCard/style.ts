import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  imageContainer: {
    width: 105,
    height: 116,
    marginRight: 16,
  },

  image: {
    flex: 1,
    width: '100%',
    borderRadius: 9,
  },

  infosContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 3,
  },

  starsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },

  starScore: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.black,
  },

  starQuantity: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.grey,
  },
  serviceTitle: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.semibold,
    color: Theme.colors.black,
  },
  startsFrom: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: '#9A9FA5',
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 4.5,
    backgroundColor: '#B5E4CA',
    borderRadius: 6,
    marginTop: 3,
  },
  badgeInfo: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.semibold,
    color: Theme.colors.black,
  },
  optionsContainer: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export default styles
