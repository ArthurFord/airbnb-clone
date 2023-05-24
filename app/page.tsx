import Banner from '@/components/Banner'
import Header from '@/components/Header'
import SmallCard from '@/components/SmallCard'
import MidCard from '@/components/MidCard'
import { randomInt } from 'crypto'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'
import { exploreItem, anywhereItem, largeItem } from '@/types'

export default async function Home() {
  const exploreData = await getExploreData()
  const anywhereData = await getAnywhereData()
  const largeData: largeItem = await getLargeData()

  return (
    <div>
      <Header />
      <Banner />
      <main className='max-w-6xl mx-auto px-8 sm:px-16'>
        <section className='pt-6 mb-16'>
          <h1 className='text-xl font-semibold pb-5'>Explore Nearby</h1>
          <div className='grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exploreData?.users.map((item: exploreItem) => (
              <SmallCard
                id={item.id}
                image={item.image}
                firstName={item.firstName}
                lastName={item.lastName}
                address={item.address}
              />
            ))}
          </div>
        </section>
        <section className='pt-6 mb-16'>
          <h1 className='text-xl font-semibold pb-5'>Live Anywhere</h1>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
            {anywhereData?.products.map((item: anywhereItem) => (
              <MidCard
                id={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
              />
            ))}
          </div>
        </section>
        <section className='pb-6'>
          <div className='relative h-96'>
            <LargeCard
              id={largeData.id}
              thumbnail={largeData.thumbnail}
              title={largeData.title}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

async function getExploreData() {
  const url = 'https://dummyjson.com/users?limit=8&skip=10'

  const res = await fetch(url)

  return res.json()
}

async function getAnywhereData() {
  const url = 'https://dummyjson.com/products?limit=8&skip=10'

  const anywhereData = await fetch(url)

  return anywhereData.json()
}

async function getLargeData() {
  const featured = randomInt(1, 30)

  const url = `https://dummyjson.com/products/${featured}`

  const largeData = await fetch(url)

  return largeData.json()
}
