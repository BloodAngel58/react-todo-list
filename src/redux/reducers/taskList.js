export const initialState = {
    itemsList: [{
            id: "458364627",
            title: "Д",
            date: "2019-05-01"
        },
        {
            id: "729092535",
            title: "Г",
            date: "2019-04-06"
        },
        {
            id: "600467454",
            title: "В",
            date: "2019-01-11"
        },
        {
            id: "496534360",
            title: "Б",
            date: "2019-08-16"
        },
        {
            id: "104204056",
            title: "А",
            date: "2019-11-21"
        }
    ],
    textInput: '',
    dateInput: '',
    filterText: '',
    filterDate: '',
    selectValue: '',

}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state, textInput: action.payload
            };
        case 'SET_DATE':
            return {
                ...state, dateInput: action.payload
            };
        case 'SET_FILTER_TEXT':
            return {
                ...state, filterText: action.payload
            };
        case 'SET_FILTER_DATE':
            return {
                ...state, filterDate: action.payload
            };
        case 'SET_SELECT_VALUE':
            return {
                ...state, selectValue: action.payload
            };
        case 'SET_TASKS': {
            return {
                itemsList: [...state.itemsList, action.payload]
            };
        }
        case 'DELL_TASKS': {
            const id = action.payload;
            const arr = [...state.itemsList];

            arr.forEach((task, index) => {
                if (task.id === id) {
                    arr.splice(index, 1);
                }
            });
            return {
                ...state,
                itemsList: arr
            }

        }
        default:
            return state;
    }
}