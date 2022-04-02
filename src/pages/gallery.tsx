import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/header';
import { CardList } from '../components/card-list';

export default function Gallery() {
    return (
        <>
            <CssBaseline />
            <Header />
            <CardList />
        </>
    );
}