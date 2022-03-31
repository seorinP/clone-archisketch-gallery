import * as React from 'react';
import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material';
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
                    <Tooltip title='닫기' placement='bottom'>
                        <IconButton
                            size='large'
                            onClick={handleCloseGallery}
                        >
                            <CloseRounded />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </>
    );
}