import './App.css'
import { useState, useEffect } from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteFavorite } from './redux/actions.js'

function App () {
  const [characters, setCharacters] = useState([])

  const dispatch = useDispatch()

  const onClose = (id) => {
    setCharacters(characters.filter((e) => e.id !== id))
    dispatch(deleteFavorite(id))
  }

  const location = useLocation()
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const username = 'ejemplo@gmail.com'
  const password = '1password'

  function login(userData){
    if(userData.password === password && userData.username === username){
      setAccess(true)
      navigate('/home')
    }
  }
  
  useEffect(() =>{
    !access && navigate('/')
  }, [access])

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          characters.find((e) => e.id === data.id) === undefined 
             ? setCharacters((characters) => [...characters, data])
              : alert("Personaje ya existe!")
         } else {
           window.alert('No hay personajes con ese ID');
         }
      });
  }

  function logout(){
    setAccess(false)
  }

  function random(){
    let randomId = Math.floor(Math.random()*4)
    onSearch(randomId)
  }

  return( 
    <div className='App' style={{ padding: '0'}} > 
      {location.pathname !=='/' && <Nav onSearch={onSearch} random={random} logout={logout}/>}
      <Routes>
        <Route exact path='/' element={<Form login={login} />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/detail/:detailId" element={<Detail />}/>
      </Routes>
    </div>
  )
}

export default App
