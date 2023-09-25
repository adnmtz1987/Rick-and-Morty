import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [ids, setIds] = useState([]);
   const [id, setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   const handleSubmit = () => {
      if(ids.includes(id)){//verificamos si ya esta renderizada la carta
         alert('Ya tenes esta carta.');
         return;
      }

      setIds([...ids, id]);//agregarmos la carta

      onSearch(id);//llamo a la funcion con el id

      setId('');//borramos el input

   }

   return (
      <div className="search-bar">
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={handleSubmit}>Agregar</button>
      </div>
   );
}