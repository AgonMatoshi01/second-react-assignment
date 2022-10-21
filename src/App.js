import React from "react"; 
import Books from "./components/Books";

const App = () =>{
    return(
        <div>
            <center>
            <div>
            <h1 className="content">Game of Thrones Books</h1>
            <p >Fetch a list from an API and display it</p>
            </div>
            </center>
            <Books/>
        </div>
        
    )
}

export default App;
