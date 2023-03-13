import { useState, useEffect  } from 'react'
import { useNavigate, useParams  } from 'react-router-dom'
import styles from'./Detail.module.css'

export default function Detail(props){

const { detailId } = useParams()
const [character, setCharacter] = useState({
  name:'',
  status: '',
  specie:'',
  gender: '',
  origin:'',
  image:'',
})

useEffect(() => {
  fetch(`https://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            specie: char.species,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image,
          });
          console.log(character);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        alert("No hay personajes con ese ID");
})
}, [detailId])

const navigate = useNavigate()

return(
  <div className={styles.divDetail}>
    <div className={styles.divTxtImg}>
      <div className={styles.textDetail}>
        <h1>Name: {character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h2>Specie: {character.specie}</h2>
        <h2>Gender: {character.gender}</h2>
        <p>Origin: {character.origin}</p>
      </div>  
      <img className={styles.imgDetail} src={character.image}/>
    </div>  
	<button className={styles.btnDetail} onClick={()=>navigate('/home')}>Back to Home</button>
  </div>
)}
