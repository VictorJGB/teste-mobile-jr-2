type Service = {
  image: string
  stars: {
    score: number
    quantity: number
  }
  category: string
  title: string
  startsFrom: string
  price: number
  provider: {
    name: string
    logo: string
  }
}

export default Service
