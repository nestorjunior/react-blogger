import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <>
      <aside className={styles.sidebar}>
        <img 
          className={styles.cover} 
          src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=50&w=500&auto=format&fit=crop" 
          alt="" 
        />
        
        <div className={styles.profile}>
          <strong>Nestorino Silva</strong>
          <span>Pilgrim in this world!</span>
        </div>
        <footer>
          <a href="#">Edit profile</a>
        </footer>
      </aside>
    </>
  )
}