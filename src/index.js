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
// import Greeting from "./ch09/Greeting";
import LoginControll from "./ch09/LoginControll";
import Greeting from "./test/Greeting"
import MailBox from "./ch09/MailBox";
import LoginControll2 from "./ch09/LoginControll2";
import LandingPage from "./ch09/LandingPage";
import AppNumberList from "./ch10/AppNumberList";
import StudentAttendance from "./ch10/StudentAttendance";
import AppStudentAttendance from "./ch10/AppStudentAttendance";
import AttendanceCard from "./ch10/avatarAttendance/AttendanceCard";
import NameForm from "./ch11/NameForm";
import RequestForm from "./ch11/RequestForm";
import NameRequest from "./ch11/NameRequest";
import SignUp from "./ch11/SignUp";
import Calculator from "./ch12/Calculator";
import Calculator2 from "./ch12/Calculator2";
import Calculator3 from "./ch12/Calculator3";
import TemperatureInput2 from "./ch12/TemperatureInput2";
import DistanceInput from "./ch12/distance/DistanceInput";
import DistanceConverter from "./ch12/distance/DistanceConverter";
import ProfileCard from "./ch13/ProfileCard";
import MainPage from "./ch13/ex1/MainPage";
import AirApp from "./ch13/airbnbHome/AirApp";

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
    <AirApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals---
reportWebVitals();
