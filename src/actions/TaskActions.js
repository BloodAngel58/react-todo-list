export const setText = textInput => {
    return {
        type: 'SET_TEXT',
        payload: textInput,
    }
}

export const setDate = dateInput => {
    return {
        type: 'SET_DATE',
        payload: dateInput,
    }
}

export const setFilterText = filterText => {
    return {
        type: 'SET_FILTER_TEXT',
        payload: filterText,
    }
}

export const setFilterDate = filterDate => {
    return {
        type: 'SET_FILTER_DATE',
        payload: filterDate,
    }
}

export const setSelectValue = selectValue => {
    return {
        type: 'SET_SELECT_VALUE',
        payload: selectValue,
    }
}

export const setTasks = tasks => {
    return {
        type: 'SET_TASKS',
        payload: tasks,
    }
}