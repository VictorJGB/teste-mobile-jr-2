import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,

    paddingTop: 24,
    paddingHorizontal: 17,
    paddingBottom: 31,

    backgroundColor: Theme.colors.backgroundIce,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    gap: 10,
  },
  line: {
    width: 4,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#CABDFF',
  },
  headerTitle: {
    fontFamily: Theme.fonts.fontFamily.bold,
    fontSize: Theme.fonts.sizes['heading-1'],
  },
  bookingInfo: {
    flex: 1,
    width: '100%',
    gap: 2,
  },
  buttonGroup: {
    width: '100%',
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 10,
    backgroundColor: Theme.colors.background,
  },
  bookingsContent: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
