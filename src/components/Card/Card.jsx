import styles from './Card.module.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions.js'
import { connect } from 'react-redux'

export function Card(props) {
   
   const [isFav, setIsFav] = useState(props.fav)
   
   function handleFavorite(){
      if(isFav) {
         setIsFav(false) 
         props.deleteFavorite(props.id)
      } else {
         setIsFav(true)
         props.addFavorite({
            name: props.name,
            species: props.species,
            gender: props.gender,
            image: props.image,
            id: props.id
         })
      }
   }

   useEffect(() => {
        props.myFavorites && props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
   }, [props.myFavorites]);
   
   return (
      <div className={styles.divCard}>
		 <div className={styles.divBtn}>  
         {
            isFav ? (
            <button className={styles.favBtn}  onClick={handleFavorite}>❤️</button>
            ) : (
            <button className={styles.favBtn}  onClick={handleFavorite}>🤍</button>
            )
         }
        	 <button className={styles.divBtnX} onClick={props.onClose}>X</button>
		 </div>
         <div className={styles.divNameImage}>
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
         	   <img  src={props.image} alt={props.name} /> 
            </Link>
		 </div>
		 <div className={styles.divGenderSpecies}>  
         	<h2>{props.gender}</h2>
        	<h2>{props.species}</h2>
		 </div>  
      </div>
   );
}   

export function mapStateToProps(state){
   return {
      myFavorites : state.myFavorites
   }
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(char){
         dispatch(addFavorite(char))
      },
      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
