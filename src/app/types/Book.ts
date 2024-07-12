import { BookingType, Status } from '@/enums/Booking'
import PropertyType from '@/enums/PropertyType'
import Service from './Service'

type Book = {
  service: Service
  referenceCode: string
  schedule: string
  status: Status
  propertyType: PropertyType
  units: number
  bedrooms: number
  description: string
  bookingType?: BookingType
}

export default Book
