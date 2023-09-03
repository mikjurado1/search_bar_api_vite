import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData =(value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((json) =>{
                const results = json.filter((user) =>{
                    return (value && user && user.name && user.name.toLowerCase(value).includes(value));
                });
                setResults(results);
            });
    }

    const handleChage =(value)=>{
        setInput(value);
        fetchData(value)
    }
  return (
    <div className="input-wraper">
        <FaSearch id="search-icon"/>
        <input placeholder="Type to search..." value={input} onChange={(e)=> handleChage(e.target.value)}/>
        
    </div>
  )
}

export default SearchBar