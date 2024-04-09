import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment} : CommentProps) {

		const [likeCount, setLikeCount] = useState(0)

		function handleDeleteComment() {
			onDeleteComment(content)
		}

		function handleCommentLike() {
			setLikeCount(likeCount + 1)
		}

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
								<button title='Deletar comentário' onClick={handleDeleteComment}>
									<FontAwesomeIcon icon={faTrash} className={styles.commentTrash} />
								</button>
							</header>
							<p>{content}</p>
						</div>
						<footer>
							<button onClick={handleCommentLike}>
								<FontAwesomeIcon icon={faThumbsUp} className={styles.commentThumbs} />
								Aplaudir <span>{likeCount}</span>
							</button>
						</footer>
					</div>
				</div>
			</>
		)
	}