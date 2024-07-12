import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

import Book from '@/app/types/Book'

type BookingContextProps = {
  books: Book[] | null
  setBooks: Dispatch<SetStateAction<Book[] | null>>
}

const BookingContext = createContext<BookingContextProps>(
  {} as BookingContextProps,
)

function BookingProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[] | null>(null)
  return (
    <BookingContext.Provider value={{ books, setBooks }}>
      {children}
    </BookingContext.Provider>
  )
}

const useBookingContext = () => useContext(BookingContext)

export { BookingProvider, useBookingContext }
// eslint-disable-next-line prettier/prettier

