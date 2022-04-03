import { Checkbox, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { useState } from "react";
import { ImgSlider } from "./img-slider";

export function ImgCard(props: any) {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(new Array(props.renderings.length).fill(false));
    const [visible, setVisible] = useState(new Array(props.renderings.length).fill(false));
    // 참고 :
    // https://egg-programmer.tistory.com/282
    // https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/


    let checkedImagesCount = isChecked.filter(item => item === true).length;

    const visibleHandler1 = (position: number) => {
        const updatedVisibleState = isChecked.map((item: boolean, index: number) =>{
            if (index === position) { 
                return true;
            }
            else if (index !== position && item===true) {
                return true;
            }
            else {
                return false;
            }
        }
        );
        setVisible(updatedVisibleState);
    }

    const visibleHandler2 = (position: number) => {
        const updatedVisibleState = isChecked.map((item: boolean, index: number) =>{
            if (index === position) { 
                if (item) {
                    return true;
                }
                return false;
            }
            else if (index !== position && item===true) {
                return true;
            }
        }
        );
        setVisible(updatedVisibleState);
    }

    const checkHandler = (position: number) => {
        const updatedCheckedState = isChecked.map((item: any, index: number) =>
            index === position ? !item : item
        );
        setIsChecked(updatedCheckedState);
    }

    const checkAllHandler = (checked: boolean) => {
        setIsAllChecked(!isAllChecked)

        const updatedCheckedState = isChecked.map(() =>{
            if(checked) {
                setVisible(new Array(props.renderings.length).fill(true));
                return true;
            } else {
                setVisible(new Array(props.renderings.length).fill(false));
                return false;
            } 
        });
        setIsChecked(updatedCheckedState);
    }

    return (
        <>
            <p>{checkedImagesCount}</p>
            <Checkbox name='allCheck' value='allCheck' checked={isAllChecked} onChange={(e) => checkAllHandler(e.target.checked)} />
            <ImageList
                cols={4}
                sx={{
                    mx: 4,
                    my: 5
                }}
            >
                {props
                    ? props.renderings.map((item: any, idx: string) => (
                        <>
                            <ImageListItem
                                id={idx}
                                sx={{
                                    margin: '9px',
                                    '&:hover': {
                                        filter: 'brightness(65%)'
                                    }
                                }}
                                onMouseEnter={() => {
                                    visibleHandler1(+idx)
                                }}
                                onMouseLeave={() => {
                                    visibleHandler2(+idx)
                                }}
                                
                            >
                                <img
                                    style={{
                                        height: '33vh',
                                        borderRadius: '4px'
                                    }}
                                    src={item._id}
                                    loading='lazy'
                                />

                                {visible[+idx] && <ImageListItemBar
                                    key={idx}
                                    sx={{
                                        background: 'transparent'
                                    }}
                                    position="top"
                                    actionIcon={
                                        <>
                                            <Checkbox name='image' id={idx} value={`img-${idx}`} checked={isChecked[+idx]} onChange={() => checkHandler(+idx)} />
                                        </>
                                    }
                                    actionPosition='left'
                                />}

                            </ImageListItem>
                        </>
                    ))
                    : 'loading'
                }
            </ImageList>
        </>
    );
}