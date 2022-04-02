import { createContext, Dispatch, useReducer, useContext } from "react";

export type Images = {
    id: number;
    count: number;
    checked: boolean;
}

type ImagesState = Images[];

const ImagesStateContext = createContext<ImagesState | undefined>(undefined);

type Action = 
    | { type: 'TOTAL'; count: number }
    | { type: 'CHECKED'; id: number }
    | { type: 'DELETE'; id: number };

type ImagesDispatch = Dispatch<Action>;

const ImagesDispatchContext = createContext<ImagesDispatch | undefined>(undefined);

function imagesReducer(state: ImagesState, action: Action): ImagesState {
    switch (action.type) {
        case 'TOTAL' :
            return state.map(image =>
                image !== undefined ? {...image, count : action.count} : image
            );
        case 'CHECKED' :
            return state.map(image =>
                image.id === action.id ? {...image, checked : !image.checked} : image
            );
        case 'DELETE' :
            return state.filter(image => image.id !== action.id);
        default:
            throw new Error('Unhandled action'); 
    }
}


// export function ImagesProvider({ children }: { children: React.ReactNode }) {
//     const [state, dispatch] = useReducer(imagesReducer, {
//         id: 0,
//         count: 0,
//         checked: false
//     });
// }