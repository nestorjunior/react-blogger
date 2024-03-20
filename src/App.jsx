import { Header } from './components/Header'
import { Posts } from './components/Posts'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Posts author="Nestor Pereira" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vitae laboriosam repudiandae laudantium, hic provident tenetur vel! Laudantium porro distinctio, eos et omnis non fugiat quo maxime neque? Architecto, vel." />
      <Posts author="Adriane" description="Perferendis vitae laboriosam repudiandae laudantium, hic provident tenetur vel! Laudantium porro distinctio, eos et omnis non fugiat quo maxime neque? Architecto, vel." />
      <Posts author="Joelson" description="Distinctio, eos et omnis non fugiat quo maxime neque? Architecto, vel." />
    </>
  )
}



