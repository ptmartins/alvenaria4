import Link from 'next/link';
import Image from 'next/image';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services'; 
import Featured from './components/Featured/Featured'; 
import Brandings from './components/Brandings/Brandings'; 
import Contacts from './components/Contacts/Contacts'; 
import About from './components/About/About'; 

export default function Home() {
  return (
    <>
      <Hero />
      <Brandings /> 
      <About />
      <Services />
      <Featured />
      <Contacts />
    </>
  )
}
