import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav(props){
   return(
      <div className={styles.divNav} >
         <SearchBar onSearch={props.onSearch} random={props.random}/>
         <div className={styles.divLink}>
            <Link className={styles.link} to="/home">Home</Link>
            <Link className={styles.link} to="/about">About</Link>
            <Link className={styles.link} to="/favorites">Favorites</Link>
            <button className={styles.btnLogout} onClick={props.logout}>Logout</button>
          </div>
      </div>
   )
}
