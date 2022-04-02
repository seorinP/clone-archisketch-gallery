import { Checkbox, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { useState } from "react";
import { ImgSlider } from "./img-slider";

export function ImgCard(props: any) {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(new Array(props.renderings.length).fill(false)); // 체크 여부
    const [visible, setVisible] = useState<boolean>(true); // 마우스 올렸을 시 메뉴 보이기
    // 참고 :
    // https://egg-programmer.tistory.com/282
    // https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/


    let checkedImagesCount = isChecked.filter(item => item === true).length;

    const checkHandler = (position: number) => {
        const updatedCheckedState = isChecked.map((item: any, index: number) =>
            index === position ? !item : item
        );
        setIsChecked(updatedCheckedState);
    }

    const checkAllHandler = (checked: boolean) => {
        console.log('checked: ', checked)
        setIsAllChecked(!isAllChecked)

        const updatedCheckedState = isChecked.map(() =>
            checked ? true : false
        );
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
                                key={idx}
                                sx={{
                                    margin: '9px',
                                    '&:hover': {
                                        filter: 'brightness(65%)'
                                    }
                                }}
                                onMouseEnter={() => {
                                    setVisible(false)
                                }}
                                onMouseLeave={() => {
                                    setVisible(true)

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

                                {!visible && <ImageListItemBar
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