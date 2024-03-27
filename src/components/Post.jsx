import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src='https://github.com/nestorjunior.png' />
            <div className={styles.authorInfo}>
              <strong>Nestorino</strong>
              <span>Front-end Developer</span>
            </div>
          </div>
        </header>
        <div className={styles.content}>
          <p>Hi guys</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis ex labore corporis delectus, velit odit? Libero placeat, sed itaque consequuntur consectetur veniam impedit inventore voluptate ullam cum ducimus expedita?</p>
          <a href="#"> #LoremIpsum</a> <a href="#">#Similique</a> <a href="#">#inventore</a> 
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe seu comentário'></textarea>
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  )
}