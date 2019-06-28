import * as _str from "../constants/ActionTypes";

export const setText = textInput => {
    return {
        type: _str.SET_TEXT,
        payload: textInput
    };
};

export const setDate = dateInput => {
    return {
        type: _str.SET_DATE,
        payload: dateInput
    };
};

export const setFilterText = filterText => {
    return {
        type: _str.SET_FILTER_TEXT,
        payload: filterText
    };
};

export const setFilterDate = filterDate => {
    return {
        type: _str.SET_FILTER_DATE,
        payload: filterDate
    };
};

export const setSelectValue = selectValue => {
    return {
        type: _str.SET_SELECT_VALUE,
        payload: selectValue
    };
};

export const setTasks = tasks => {
    return {
        type: _str.SET_TASKS,
        payload: tasks
    };
};
export const delTasks = tasks => {
    return {
        type: _str.DELL_TASKS,
        payload: tasks
    };
};