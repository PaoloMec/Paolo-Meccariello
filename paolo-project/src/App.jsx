import { useState } from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import './App.css'
import './fonts/NeutralFace.otf'
import Wrapper from './components/Wrapper'
import HalfParagraph from './components/HalfParagraph'
import SvgUninion from './components/SvgUninion'




function App() {

  const title = `Sono Paolo, un front-end developer italiano e attualmente vivo in italia`
  const text = [
    `Sviluppatore autodidatta, ho seguito un corso di web-design per 1 anno prima di fare lo switch. Ancora oggi progetto UI per piacere personale e lavori occasionali con i clienti. Questo passato atipico mi permette di essere molto sensibile ai dettagli visivi, alle animazioni o alla tipografia.`,
    `Quando non lavoro, amo provare i ristoranti/pizzerie con i miei amici, scoprire la natura a piedi e, soprattutto, perdermi in Internet.`,
  ]

  return (
    <>
      <Nav></Nav>
      <Wrapper>
        <HeroSection></HeroSection>
        <HalfParagraph title={title} text={text}></HalfParagraph>
        <SvgUninion></SvgUninion>
      </Wrapper>
    </>
  )
}

export default App
