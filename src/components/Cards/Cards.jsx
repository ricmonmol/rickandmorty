import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {
   return(
		  <div className={styles.divCards}>
			{characters.map(c => 
			<Card 
				id={c.id}
				key={c.name}
				name={c.name}
				species={c.species}
				gender={c.gender}
				image={c.image}	
				onClose={() => onClose(c.id)}
			/>)}
		  </div>
   )
}
