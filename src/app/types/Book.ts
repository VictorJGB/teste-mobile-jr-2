import PropertyType from '@/enums/PropertyType'
import Service from './Service'

type Book = {
  service: Service
  referenceCode: string
  schedule: string
  status: 'confirmed' | 'pending'
  propertyType?: PropertyType
  units?: number
  bedrooms?: number
  description?: string
}

export default Book
