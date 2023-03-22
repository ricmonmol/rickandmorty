import styles from '../Cards/Cards.module.css'
import styled from './Favorites.module.css'
import Card from '../Card/Card.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { filterCards, orderCard } from '../../redux/actions.js'

export function Favorites(){

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const myFavorites = useSelector((state) => state.myFavorites)

	function handleDispatch(e){
		if(e.target.name === 'order'){
			dispatch(orderCard(e.target.value))
		}
		if(e.target.name === 'filter'){
			dispatch(filterCards(e.target.value))
		}
	}

	return (
    	<div>
			<div>
				<select className={styled.selBtn} onClick={handleDispatch} name='order'>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select className={styled.selBtn} onClick={handleDispatch} name='filter'>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="Unknown">Unknown</option>
				</select>
			</div>
	  		<div className={styles.divCards}>
				{myFavorites.length === 0 ? (
					<p className={styled.pFav}>Agrega un favorito</p>
		  		) : (
				myFavorites.map((c, i) => ( 
					<Card 
					id={c.id}
					key={i++}
					name={c.name}
					species={c.species}
					gender={c.gender}
					image={c.image}
						onClick={false}
					/>
				)))}
		  	</div>
      		<button className={styled.backTHBtn}  onClick={()=>navigate('/home')}>Back to Home</button>
    	</div>
  	)
}

//export function mapStateToProps(state){
//  return{
//    myFavorites: state.myFavorites
//  }
//}

//export default connect(mapStateToProps, null)(Favorites)

export default Favorites
