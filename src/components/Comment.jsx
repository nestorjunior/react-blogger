import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './Comment.module.css'


export function Comment() {
    return (
      <>
        <div className={styles.comment}>
          <img className={styles.avatar}  src="https://github.com/nestorjunior.png" alt="" />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.commentAuthor}>
                  <strong>Nestorino Junior</strong>
                </div>
                <button title='Deletar comentário'>
                  <FontAwesomeIcon icon={faTrash} className={styles.commentTrash} />
                </button>
              </header>
              <p>Muito bom Devon, Parabéns!!!</p>
            </div>
            <footer>
              <button>
                <FontAwesomeIcon icon={faThumbsUp} className={styles.commentThumbs} />
                Aplaudir <span>20</span>
              </button>
            </footer>
          </div>
        </div>
      </>
    )
  }