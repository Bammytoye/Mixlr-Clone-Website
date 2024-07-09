import HomePage from '../components/HomePage.jsx'
import NavBar from '../components/NavNar.jsx'
import Carsouel from '../components/Carsouel.jsx'
import Available from '../components/Available.jsx'
import Solution from '../components/Solution.jsx'
import Footer from '@/components/Footer.jsx'

export default function Home() {

  const images = [
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.png',
  ];


  return (
    <>
      <NavBar />
      <HomePage />
      <Carsouel images={images} interval={3000} />
      <Available />
      <Solution />
      <Footer />
    </>
  );
}