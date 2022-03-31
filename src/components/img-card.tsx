import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";

export function ImgCard(props: any) {
    console.log('이미지 카드의 props : ', props);
    console.log('이미지 카드의 props.renderings 타입 : ', typeof(props.renderings));

    
    return (
        <>
            <ImageList
                cols={4}
                sx={{
                    mx: 4,
                    my: 5
                }}
            >
                {props
                    ? props.renderings.map((item: any, idx: number) => (
                        <>
                            <ImageListItem
                                key={`${idx}`}
                                sx={{
                                    margin: '9px',
                                    '&:hover': {
                                        filter: 'brightness(70%)'
                                    }
                                }}
                            >
                                <img
                                    style={{
                                        height: '33vh',
                                        borderRadius: '4px'
                                    }}
                                    src={`${item._id}`}
                                    loading='lazy'
                                />
                            </ImageListItem>
                        </>
                    ))
                    : 'loading'
                }
            </ImageList>
        </>
    );
}