import styles from './SearchBar.module.css';
import { useState } from 'react'

export default function SearchBar(props) {
   const [character, setCharacter] = useState(0)
 
   const handleChange = (e) => {
      setCharacter(e.target.value)
   } 
   return (
      <div className={styles.divBtn}>
       <input type='search' onChange={handleChange} />
         <button className={styles.btnSearch} onClick={() => props.onSearch(character)}>Agregar</button> 
         <button className={styles.btnSearch} onClick={props.random}>Random</button>
      </div>
   );
}
