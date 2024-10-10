import React, {useState} from "react";

//기본적인 클릭 이벤트 처리
//버튼을 클릭하면 알림창이 표시되게 합니다. alert

//함수형 컴포넌트로 작성하기

function ClickButton(){
    const [isToggleOn,setIsToggleOn]=useState(true);
    


    const ClickButton=()=>{
        setIsToggleOn((isToggleOn)=>!isToggleOn);
        alert("버튼이 클릭되었습니다.");
    }


    return(
        <button onClick={ClickButton}>
            함수형 컴포넌트 {isToggleOn? "켜짐":"꺼짐"}
        </button>
    );
}

export default ClickButton;