import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';


export function NavBar() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Typography>OO개의 렌더샷</Typography>
                </Grid>
                <Grid item xs>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold' }}
                    >
                        갤러리
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}