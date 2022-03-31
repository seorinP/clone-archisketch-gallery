import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/header';
import { NavBar } from '../components/navBar';
import { CardList } from '../components/card-list';

export default function Gallery() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Box sx={{ mt: 10, mx: 3 }}>
                <NavBar />
            </Box>
            <CardList />
        </>
    );
}