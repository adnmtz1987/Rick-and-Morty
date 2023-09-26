import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Favorites from './components/Favorites/Favorites';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';

const email = 'adnmtz1987@gmail.com';
const password = 'panda1';

function App() {

   const location = useLocation();

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFilter = characters.filter(characters => characters.id !== Number(id))
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
         }         
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>

            <Route path='/about' element={<About/>}/>
            
            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>         
      </div>
   );
}

export default App;