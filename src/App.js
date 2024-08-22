import React from 'react'
import './App.css'
import {Blog, Footer, Header, Library, Search} from "./containers";
import {Navbar} from "./components";


const App = () => {
    return (
        <div className="App">
                <Navbar/>
                <Header/>
                <Blog/>
                <Search/>
                <Library/>
                <Footer/>
        </div>
    )
}
export default App
