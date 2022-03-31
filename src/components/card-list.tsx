import { useState, useEffect } from 'react';
import { ImgCard } from './img-card';
import JsonData from '../data/test.json';
import { Typography } from '@mui/material';

export function CardList() {
    const [ImageData, setImageData] : any = useState(JsonData);
    useEffect(() => {
        setImageData(JsonData);
    }, []);
    
    console.log('Json Data1 : ', ImageData);
    

    const imgCardsNum = 1;

    function createImgCards() {
        let cards = [];
        
        for (let i=0; i < imgCardsNum; i++) {
            cards.push(
                <ImgCard {...ImageData} />
            )
        }
        return cards;        
    }
    return (
        <>
            {createImgCards()}
        </>
    );
}