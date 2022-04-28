import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    // debugger
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}

                 //   dispatch={store.dispatch.bind(store)}
                    //updateNewPostText={store.updateNewPostText.bind(store)}
store={store}
                    // addMessages={store.addMessages.bind(store)}
                    //  updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}


rerenderEntireTree(store.getState());
store.subscribe(() => {
        let state = store.getState()
        rerenderEntireTree(state)
    }
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
