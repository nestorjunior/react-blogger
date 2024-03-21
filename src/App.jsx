import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts author="Nestor Pereira" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vitae laboriosam repudiandae laudantium, hic provident tenetur vel! Laudantium porro distinctio, eos et omnis non fugiat quo maxime neque? Architecto, vel." />
          <Posts author="Adriane" description="Perferendis vitae laboriosam repudiandae laudantium, hic provident tenetur vel! Laudantium porro distinctio, eos et omnis non fugiat quo maxime neque? Architecto, vel." />
          <Posts author="Joelson" description="Distinctio, eos et omnis non fugiat quo maxime neque? Architecto, vel." />
        </main>
      </div>
      
    </>
  )
}



