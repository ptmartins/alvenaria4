import Link from 'next/link';
import Hero from './components/Hero/Hero';
import Brandings from './components/Brandings/Brandings'; 
import Services from './components/Services/Services'; 

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Brandings /> 
    </>
  )
}
