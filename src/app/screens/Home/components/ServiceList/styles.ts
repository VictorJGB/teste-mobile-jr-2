import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    padding: 16,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },

  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },

  headerText: {
    fontSize: Theme.fonts.sizes['heading-3'],
    fontFamily: Theme.fonts.fontFamily.semibold,
    color: Theme.colors.black,
  },

  line: {
    height: 20,
    width: 4,
    borderRadius: 4,
    backgroundColor: Theme.colors.grey,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
})

export default styles