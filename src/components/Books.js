import axios from "axios";
import React, { useState } from "react";
import Loading from "./Loading";
import moment from "moment/moment";
import './Books.css'
import FaceIcon from '@mui/icons-material/Face';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const Books = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hideButton, setHideButton] = useState(false);

    const fetchedData = async () => {
        setLoading(true);
        const { data } = await axios.get('https://www.anapioficeandfire.com/api/books?pageSize=30');
        setResults(data);
        setLoading(false);

    }

    const renderedResults = results.map((result, i) => {
        i++;
        return (
            
            <div className="card" key={result.name}>
                <div className="box">
                    <div className="content">
                        <center>Book {i}</center>
                        <h3>{result.name}</h3>
                            <div className="card-info">
                                <p><FaceIcon/> : {result.authors}</p>
                                <p><MenuBookIcon/> : {result.numberOfPages}</p>
                                <p><FlagIcon/> : {result.country}</p>
                                <p><CalendarTodayIcon/> : {moment(result.released).format("MMM Do YYYY")}</p>
                            </div>
                    </div>     
                </div>
            </div>

        );
    });

    const sortElements = (sortingType) => {
        if (sortingType === 'ASC') {
            const newResult = [...results].sort((a, b) => a.released > b.released ? 1 : -1);
            setResults(newResult);
        }

        if (sortingType === 'DSC') {
            const newResult = [...results].sort((a, b) => a.released > b.released ? -1 : 1);
            setResults(newResult);
        }
        console.log(results);

    }

    const handleClick = () => {
        fetchedData();
        setHideButton(true);
    };

    return (
        <div>
            <center>
                {!hideButton ? <button className="button" onClick={handleClick}>Fetch the data</button> :
                    <center>
                        <button className="button1" onClick={() => sortElements('ASC')}>Click for ascending  order of data</button>
                        <button className="button1" onClick={() => sortElements('DSC')}>Click for descendinga order of data</button>
                    </center>
                }
                {loading && <i> <Loading /> </i>}
            </center>

            <div>
                <div className="container">
                        {renderedResults}
                </div>
            </div>


        </div>
    )
}

export default Books;

