import React from 'react'; 
import validate from './validate.js'
import styles from './Form.module.css'

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
	<div>
		<form className={styles.formBox} onSubmit={handleSubmit}>
		<label htmlFor=''>USERNAME:</label>
		<input
		type='text'
		name='username'
		value={userData.username}
		onChange={handleInputChange}
		  />
		<p>{errors.username}</p>
		<label htmlFor=''>PASSWORD:</label>
		<input
		type='password'	
		name='password'
		value={userData.password}
		onChange={handleInputChange}
		  />
		<p>{errors.password}</p>
		<button className={styles.formBtn}>Login</button> 
	  </form>	
	</div>
  )
}
