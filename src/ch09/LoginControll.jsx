import React, {useState, UseState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginControll(props){
    const[isLoggedIn,setIsLoggedIn]=useState(false);

    const handleLoginClick=()=>{
        setIsLoggedIn(true);
    }

    const handleLogoutClick=()=>{
        setIsLoggedIn(false);
    }

    let btn;
    if(isLoggedIn){
        btn=<LogoutButton onClick={handleLogoutClick}/>;
    }else{
        btn=<LoginButton onClick={handleLoginClick}/>;
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    )
}

export default LoginControll;