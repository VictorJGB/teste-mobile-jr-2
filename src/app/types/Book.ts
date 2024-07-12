import Service from './Service'

type Book = {
  service: Service
  referenceCode: string
  schedule: string
  status: 'confirmed' | 'pending'
}

export default Book
