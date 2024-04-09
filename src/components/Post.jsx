import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react';

export function Post(author, content) {

	const [comments, setComments] = useState([
		'Hmm postagem bem interessante!'
	])

	const[newCommentText, setNewCommentText] = useState('')

	function handleCreateNewComment(e) {
		e.preventDefault()
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleNewComment(e) {
		setNewCommentText(e.target.value)
	}

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
        </header>
        <div className={styles.content}>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit eum quia officia ex. Labore iusto animi rem id officiis, ad, laboriosam deserunt esse illo facilis modi quos praesentium aspernatur sunt?</p>
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea 
						name='comment'
						value={newCommentText}
						placeholder='Deixe seu comentário' 
						onChange={handleNewComment}
					/>
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          { comments.map(comment => {
						return( <Comment key={comment} content={comment} /> )
					}) }
        </div>
      </article>
    </>
  )
}