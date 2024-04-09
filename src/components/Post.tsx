import React from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: 'paragraph' | 'link';
	content: string;
}

interface PostProps {
	author: Author;
	content: Content[];
}

export function Post({author, content}:PostProps) {

	const [comments, setComments] = useState([
		'Hmm postagem bem interessante!'
	])

	const[newCommentText, setNewCommentText] = useState('')

	function handleCreateNewComment(e:FormEvent) {
		e.preventDefault()
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleNewComment(e: ChangeEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity('')
		setNewCommentText(e.target.value)
	}

	function handleNewCommentInvalid (e: InvalidEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity('Esse campo é obrigatório')
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeleOne = comments.filter(comment => {
			return comment !== commentToDelete;
		})

		setComments(commentsWithoutDeleOne)
	}

	const isNewCommentEmpty = newCommentText.length === 0

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
						onInvalid={handleNewCommentInvalid}
						required
					/>
          <footer>
            <button type='submit' disabled={isNewCommentEmpty}>
							Publicar
						</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          { comments.map(comment => {
						return(
							<Comment 
								key={comment} 
								content={comment} 
								onDeleteComment={deleteComment}
							/>
						)
					}) }
        </div>
      </article>
    </>
  )
}