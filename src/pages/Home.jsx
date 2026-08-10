import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Empreendimentos from '../components/Empreendimentos'
import Sobre from '../components/Sobre'
import VideoSection from '../components/VideoSection'
import Vantagens from '../components/Vantagens'
import Depoimentos from '../components/Depoimentos'
import Footer from '../components/Footer'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    let attempts = 0
    const tryScroll = () => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (attempts < 20) {
        attempts += 1
        setTimeout(tryScroll, 50)
      }
    }
    tryScroll()
  }, [hash])

  return (
    <>
      <Header />
      <Hero />
      <Empreendimentos />
      <Sobre />
      <VideoSection />
      <Vantagens />
      <Depoimentos />
      <Footer />
    </>
  )
}
