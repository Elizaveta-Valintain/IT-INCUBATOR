import Calendar from "./Calendar";
import {connect} from "react-redux";


let mapStateToProps = (store) => {
return{
    calendar : store.calendarPage.calendar
}
}

let mapDispatchToProps = (dispatch) => {
return{

}
}

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar)

export default CalendarContainer
