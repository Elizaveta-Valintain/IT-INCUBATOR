const BUTTON_NEXT_RIGHT = 'BUTTON-NEXT-RIGHT'
const BUTTON_NEXT_LEFT = 'BUTTON-NEXT-LEFT'

const initReducersTree = {
    calendar: {
        days: [
            {id: 1, day: 'Monday'},
            {id: 2, day: 'Tuesday'},
            {id: 3, day: 'Wednesday'},
            {id: 4, day: 'Thursday'},
            {id: 5, day: 'Friday'},
            {id: 6, day: 'Saturday'},
            {id: 7, day: 'Sunday'},
        ],


        months: [
            {id: 1, month: 'January'},
            {id: 2, month: 'February'},
            {id: 3, month: 'March'},
            {id: 4, month: 'April'},
            {id: 5, month: 'May'},
            {id: 6, month: 'June'},
            {id: 7, month: 'July'},
            {id: 8, month: 'August'},
            {id: 9, month: 'September'},
            {id: 10, month: 'October'},
            {id: 11, month: 'November'},
            {id: 12, month: 'December'}
        ]
    }
}

const CalendarReducer = (state = initReducersTree, action) => {
    switch (action.type) {
        case BUTTON_NEXT_RIGHT:

        case BUTTON_NEXT_LEFT:

        default:
            return state
    }

}

export default CalendarReducer
