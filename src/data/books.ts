import Book from '@/app/types/Book'
import { ServicesData } from './services'

export const BooksData: Book[] = [
  {
    service: ServicesData[0].services[0],
    referenceCode: '#D-571224',
    schedule: '8:00-9:00 AM,  09 Dec',
    status: 'confirmed',
  },
  {
    service: ServicesData[0].services[1],
    referenceCode: '#D-571224',
    schedule: '8:00-9:00 AM,  09 Dec',
    status: 'pending',
  },
]
