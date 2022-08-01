import { GET_MOVIES, CREATE_MOVIES, GET_COMMON_ACTORS_MOVIES, MOVIES_ERROR, GET_ACTORS, SELECT_MOVIES } from '../actions/types';

const initialState = {
    regs: [],
    actorRegs: [],
    response: {},
    moviesSelected:[],
    columnsMovie: [
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'category', headerName: 'Category', width: 200 },
        { field: 'cast', headerName: 'Cast', width: 200 },
    ],
    columnsActor: [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 200 },
    ]
};

export default function moviesregs(state = initialState, action) {
    switch (action.type){
        case GET_ACTORS:
            return {
                ...state,
                actorRegs: action.payload,
            };
        case GET_MOVIES:
            return {
                ...state,
                regs: action.payload,
            };
        case GET_COMMON_ACTORS_MOVIES:
            return {
                ...state,
                actorRegs: action.payload,
            };
        case CREATE_MOVIES:
            return {
                ...state,
                regs:[...state.regs, action.payload],
                response: action,
            };
        case MOVIES_ERROR:
            return {
                ...state,
                regs: [{
                    "title": 0,
                    "category": "error",
                    "cast": ["error"]
                }],
            };
        case SELECT_MOVIES:
            return {
                ...state,
                moviesSelected: action.payload,
            };
        default:
            return state;
    }
}