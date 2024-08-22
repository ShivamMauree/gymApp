import React, {useState} from 'react'
import "./search.css"
import {exerciseUrl,exerciseOptions,fetchData} from "../../utils/fetchData";

const Search = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async() => {
        if(search){
             const exercisesData = await fetchData(exerciseUrl, exerciseOptions);
             console.log(exercisesData)
        }
    }
    return (
        <div className="gym__search-container app__bg">

            <div className="gym__search-title">
                <h1>Discover Your Workout Today. Find the Perfect Exercise for Tomorrow and Make It Yours !</h1>
            </div>

            <div className="gym__search-bar">
                <input type="text"
                       value={search}
                       placeholder = "Search For Your Exercise"
                       onChange={(e) => setSearch(e.target.value.toLowerCase())}
                       onKeyDown={ (e) =>{
                           if (e.key === 'Enter'){
                               handleSearch();
                           }
                       }}
                />
            </div>

        </div>
    )
}
export default Search
