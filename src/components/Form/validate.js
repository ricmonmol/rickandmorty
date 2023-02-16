// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(inputs){
  let errors = {}
  
  if(!regexEmail.test(inputs.username) || (inputs.username.length > 35)) errors.username = 'Debe ser un correo electrónico válido'
	
  if(inputs.password < 5 || inputs.password > 11) errors.password = 'Debe ser un password válido' 

  return errors
}
