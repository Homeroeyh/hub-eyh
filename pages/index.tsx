
import Head from 'next/head'
import HubMenu from '../components/HubMenu'

export default function Home() {
  return (
    <>
      <Head>
        <title>HUB Electro y Hogar</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">HUB - Electro y Hogar</h1>
        <HubMenu />
      </main>
    </>
  )
}
