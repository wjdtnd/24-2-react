import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
// import './ch03/Book.css';
// import './ch04/BTN.css';
// import './ch04/Clock.css';



import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./ch03/Library";
import ConfirmDialog from "./ch04/ConfirmDialog";
import BackDialog from "./ch04/BackDialog";
import Clock from "./ch04/Clock";
import CommentList from "./ch05/CommentList";
import NotificationList from "./ch06/NotificationList";
import Accommodate from "./ch07/Accomodate";
import Toggle from "./ch08/Toggle";
import MyButton from "./ch08/MyButton";
import Toggle2 from "./ch08/Toggle2";
import ClickButton from "./ch08/ClickButton";
import Counter from "./ch08/Counter";
import InputTest from "./ch08/inputTest";
import ConfirmButton from "./ch08/ConfirmButton";
import ConfirmButton2 from "./ch08/ConfirmButton";
import ConfirmButton3 from "./ch08/ConfirmButton";

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(()=>{
//     root.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>
//     );
//     },1000
// )
root.render(
  <React.StrictMode>
    <ConfirmButton3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals---
reportWebVitals();
