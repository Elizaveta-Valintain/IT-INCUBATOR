import {addMessagesActionCreator, updateNewMessagesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessagesBody: (text) => {
            dispatch(updateNewMessagesTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessagesActionCreator())
        }
    }
}


let AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
