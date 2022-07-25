import React from 'react';
import './App.css';

import {Semester} from "./components/semester";
import {ay2122s1, ay2122s2} from "./constants/modulesTaken";
import {Box, Typography} from "@mui/material";

function App() {
    return (
        <>
            <Box sx={{width: '100%', maxWidth: 500, m: 1}}>
                <Typography variant="h4" gutterBottom component="div">
                    only technical modules listed
                </Typography>
            </Box>
            <Semester name="Year 1 Sem 2 (AY21/22)" modules={ay2122s2}/>
            <Semester name="Year 1 Sem 1 (AY21/22)" modules={ay2122s1}/>
        </>
    );
}

export default App;
