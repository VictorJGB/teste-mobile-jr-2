import Theme from '@/styles/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    borderRadius: 8,
    gap: 12,

    backgroundColor: Theme.colors.background,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  },
  categoryImage: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: '#FFBC99',
    borderRadius: 50,
    width: 50,
    height: 50,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 6,
  },
  headerTitle: {
    fontSize: Theme.fonts.sizes.lg,
    fontFamily: Theme.fonts.fontFamily.bold,
    color: Theme.colors.black,
  },
  headerSubtitle: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: Theme.colors.grey,
  },
  divider: {
    height: 1,
    width: '100%',
    borderRadius: 1,
    backgroundColor: '#EFEFEF',
  },
  cardBody: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10,
  },
  bodyHeader: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusLabel: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: Theme.colors.grey,
    textAlign: 'center',
  },
  statusConfirmed: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.semibold,
    borderRadius: 5,
    padding: 8,
    color: '#7FC09C',
    backgroundColor: '#ECF8F1',
  },
  statusPending: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.semibold,
    borderRadius: 5,
    padding: 8,
    color: '#EB833C',
    backgroundColor: '##EB833C1A',
  },
  scheduleContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  scheduleIconContainer: {
    borderRadius: 47.3,
    borderWidth: 0.73,
    borderColor: '#C4C4C44D',
    backgroundColor: Theme.colors.background,
    padding: 10,
  },
  scheduleInfoContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 6,
  },
  scheduleDate: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.semibold,
    color: Theme.colors.black,
  },
  scheduleLabel: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: Theme.colors.grey,
  },
  providerContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  providerLogoContainer: {
    borderRadius: 47.3,
    borderWidth: 0.73,
    borderColor: '#C4C4C44D',
    backgroundColor: Theme.colors.background,
    padding: 10,
  },
  providerInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 6,
  },
  providerName: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.semibold,
    color: Theme.colors.black,
  },
  providerLabel: {
    fontSize: Theme.fonts.sizes.sm,
    fontFamily: Theme.fonts.fontFamily.medium,
    color: Theme.colors.grey,
  },
  callButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: Theme.colors.primary.background,
  },
  callButtonText: {
    fontSize: Theme.fonts.sizes.base,
    fontFamily: Theme.fonts.fontFamily.semibold,
    color: '#FCFCFC',
  },
})

export default styles
