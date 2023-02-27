import React from 'react'; 
import validate from './validate.js'
import styles from './Form.module.css'
import img from '../assets/kCyZc7mvqHdeUGpguSGxsWPxqpI.png'

export default function Form(props){
	const [userData, setUserData] = React.useState({
		username:'',
		password:''
	})

	const [errors, setErrors] = React.useState({
		username:'',
		password:''
	})

	const handleInputChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]:e.target.value
		})
		setErrors(
			validate({
			...userData,
			[e.target.name]:e.target.value
			})
		)
	}

	function handleSubmit(e){
		e.preventDefault()
		props.login(userData)
	}

  return (
	<div className={styles.divForm}>
		<form className={styles.formBox} onSubmit={handleSubmit}>
		<img className={styles.divImg} src={img}/>
		<div className={styles.divInput}>
			<p>✉️</p>
			<input
				type='text'
				name='username'
				value={userData.username}
				onChange={handleInputChange}
				placeholder='Username'	
		  	/>
		</div>
		<p>{errors.username}</p>
		<div className={styles.divInput}>
			<p>🔒</p>
			<input
				type='password'	
				name='password'
				value={userData.password}
				onChange={handleInputChange}
				placeholder='Password'	
		  	/>
		</div>	
		<p>{errors.password}</p>
		<button className={styles.formBtn}>login</button> 
	  </form>	
	</div>
  )
}
