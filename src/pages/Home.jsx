import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { rolarPara } from '../lib/rolagem'
import HomeIntro from '../components/HomeIntro'
import HomeHero from '../components/HomeHero'
import Destaque from '../components/home/Destaque'
import TodosEmpreendimentos from '../components/home/TodosEmpreendimentos'
import Diferenciais from '../components/home/Diferenciais'
import SobreZimbel from '../components/home/SobreZimbel'
import Contato from '../components/home/Contato'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    let attempts = 0
    const tryScroll = () => {
      const el = document.querySelector(hash)
      if (el) {
        rolarPara(el)
      } else if (attempts < 20) {
        attempts += 1
        setTimeout(tryScroll, 50)
      }
    }
    tryScroll()
  }, [hash])

  return (
    <>
      <HomeIntro />
      <HomeHero />
      <main>
        <Destaque />
        <TodosEmpreendimentos />
        <Diferenciais />
        <SobreZimbel />
        <Contato />
      </main>
    </>
  )
}
