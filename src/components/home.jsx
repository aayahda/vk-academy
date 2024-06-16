import React from "react";
import '../index.css';
import Button from '@mui/material/Button';
import Btn from "./btn";


function Home(){
    return <div className="home">
        <div>
        <h1>CULTIVATING CHAMPIONS OF TOMORROW</h1>
        <h3>Unlock your athletic potential with our comprehensive training and development programs.</h3>
        <Btn
        bg='#DD2121'
        color='white'/>
        </div>
    </div>
}

export default Home;