import * as React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

export function Header() {
    const handleCloseGallery = () => {
        console.log('갤러리 닫기');
    };

    return (
        <>
            <AppBar 
                elevation={1}
                position='fixed'
                color='default'
                sx={{
                    backgroundColor: 'white'
                }}
            >
                <Toolbar>
                    <IconButton
                        size='large'
                        onClick={handleCloseGallery}
                    >
                        <CloseRounded />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}