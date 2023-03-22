import styles from './Card.module.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions.js'
import { useDispatch, useSelector } from 'react-redux'

export function Card(props) {
   
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites)


   function handleFavorite(){
      if(isFav) {
         setIsFav(false) 
         dispatch(deleteFavorite(props.id))
      } else {
         setIsFav(true)
         dispatch(addFavorite(props))
      }
   }

   useEffect(() => {
        myFavorites && myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
// eslint-disable-next-line
   }, [myFavorites]);
   
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

//export function mapStateToProps(state){
//   return {
//      myFavorites : state.myFavorites
//   }
//}

//export function mapDispatchToProps(dispatch){
//   return {
//      addFavorite: function(char){
//         dispatch(addFavorite(char))
//      },
//      deleteFavorite: function(id){
//         dispatch(deleteFavorite(id))
//      }
//   }  
//}

//export default connect(mapStateToProps, mapDispatchToProps)(Card)

export default Card
