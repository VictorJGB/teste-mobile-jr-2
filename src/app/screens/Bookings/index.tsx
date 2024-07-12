import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

// components
import FilterButton from './components/FilterButton'
import UpcomingContent from './components/UpcomingContent'
// styles
import { useBookingContext } from '@/context/booking'
import { BookingType } from '@/enums/Booking'
import DraftComponent from './components/DraftContent'
import HistoryComponent from './components/History'
import NoContentComponent from './components/NoContent'
import styles from './styles'

export default function BookingsScreen() {
  const [filterType, setFilterType] = useState<BookingType>(
    BookingType.upcoming,
  )
  const { books } = useBookingContext()

  function handleContent() {
    if (!books) return <NoContentComponent />

    if (filterType === BookingType.upcoming)
      return <UpcomingContent data={books} />

    if (filterType === BookingType.history) return <HistoryComponent />

    if (filterType === BookingType.draft) return <DraftComponent />
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.line} />
        <Text style={styles.headerTitle}>Bookings</Text>
      </View>

      {/* bookings info */}
      <View style={styles.bookingInfo}>
        {/* button group */}
        <View style={styles.buttonGroup}>
          <FilterButton
            isSelected={filterType === BookingType.upcoming}
            onPress={() => setFilterType(BookingType.upcoming)}
            title="Upcoming"
          />
          <FilterButton
            isSelected={filterType === BookingType.history}
            onPress={() => setFilterType(BookingType.history)}
            title="History"
          />
          <FilterButton
            isSelected={filterType === BookingType.draft}
            onPress={() => setFilterType(BookingType.draft)}
            title="Draft"
          />
        </View>
        {/* bookings content */}
        <ScrollView contentContainerStyle={styles.bookingsContent}>
          {handleContent()}
        </ScrollView>
      </View>
    </View>
  )
}
