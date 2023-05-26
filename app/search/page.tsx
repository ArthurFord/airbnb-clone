import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Search() {
  return (
    <div>
      <Header />

      <main>
        <section className='flex'>
          <p className='text-xs'>300+ stays for you</p>
          <h1 className='text-xl font-semibold mt-2 mb-6'>Stays in Mars</h1>
        </section>
      </main>
      <Footer />
    </div>
  )
}
