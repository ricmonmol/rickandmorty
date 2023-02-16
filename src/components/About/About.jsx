import styles from '../Card/Card.module.css'
import image from  '../assets/gorickyourself.jpg'

export default function About() {

  const imgAbout = {
    width: "400px"
  }

  const divCardAbout = {
    margin: "20px auto"
  }

  return(
      <div className={styles.divCard} style={divCardAbout}>
         <div className={styles.divNameImage}>
               <h2>Ricardo</h2>
           <img style={imgAbout} src={image} alt='Ricardo' /> 
		 </div>
		 <div className={styles.divGenderSpecies}>  
         	<h2>Male</h2>
        	<h2>Human</h2>
		 </div>  
      </div>
  )
}
