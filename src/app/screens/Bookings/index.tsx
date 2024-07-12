import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

// components
import FilterButton from './components/FilterButton'
import UpcomingContent from './components/UpcomingContent'
// styles
import { useBookingContext } from '@/context/booking'
import DraftComponent from './components/DraftContent'
import HistoryComponent from './components/History'
import NoContentComponent from './components/NoContent'
import styles from './styles'

enum Filters {
  upcoming,
  history,
  draft,
}

export default function BookingsScreen() {
  const [filterType, setFilterType] = useState<Filters>(Filters.upcoming)
  const { books } = useBookingContext()

  function handleContent() {
    if (!books) return <NoContentComponent />

    if (filterType === Filters.upcoming) return <UpcomingContent data={books} />

    if (filterType === Filters.history) return <HistoryComponent />

    if (filterType === Filters.draft) return <DraftComponent />
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
            isSelected={filterType === Filters.upcoming}
            onPress={() => setFilterType(Filters.upcoming)}
            title="Upcoming"
          />
          <FilterButton
            isSelected={filterType === Filters.history}
            onPress={() => setFilterType(Filters.history)}
            title="History"
          />
          <FilterButton
            isSelected={filterType === Filters.draft}
            onPress={() => setFilterType(Filters.draft)}
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
