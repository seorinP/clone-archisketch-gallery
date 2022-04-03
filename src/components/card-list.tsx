import { useState, useEffect } from 'react';
import { ImgCard } from './img-card';
import JsonData from '../data/test.json';
import { Box, Typography, Grid } from '@mui/material';

export function CardList() {
    const [ImageData, setImageData]: any = useState(JsonData);
    useEffect(() => {
        setImageData(JsonData);
    }, []);

    console.log('Json Data1 : ', ImageData);


    const imgCardsNum = 1;

    function createImgCards() {
        let cards = [];

        for (let i = 0; i < imgCardsNum; i++) {
            cards.push(
                <ImgCard {...ImageData} />
            )
        }
        return cards;
    }

    return (
        <>
        <Box sx={{ mt: 10, mx: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Typography>{ImageData.renderings.length}개의 렌더샷</Typography>
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
            </Box>
            
            {createImgCards()}
        </>
    );
}