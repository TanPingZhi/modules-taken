import React from 'react';
import './App.css';

import {Semester} from "./components/semester";
import {preuni, ay2122s1, ay2122s2} from "./constants/modulesTaken";
import {Box, Typography} from "@mui/material";

function App() {
    return (
        <>
            <Box sx={{width: '100%', maxWidth: 500, m: 2}}>
                <Typography variant="h4" gutterBottom component="div">
                    only technical modules listed
                </Typography>
            </Box>
            <Semester name="AY21/22 Sem 2" modules={ay2122s2}/>
            <Semester name="AY21/22 Sem 1" modules={ay2122s1}/>
            <Semester name="Pre Uni" modules={preuni}/>
        </>
    );
}

export default App;
