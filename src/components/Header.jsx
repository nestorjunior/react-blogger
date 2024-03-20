import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <FontAwesomeIcon icon={faComments} className='icon-logo' color="#00875f" size="2x" />
      </header>
    </>
  )
}