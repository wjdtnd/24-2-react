import React, {useState} from "react";

//커스텀(사용자 정의) 훅 만들기(카운터라는 상태를 관리해주는 용도)
function useCounter(initialValue){
    const[count,setCount]=useState(initialValue);

    const increaseCount =()=>{
        setCount((count)=>count+1);
    }

    const decreaseCount =()=>{
        setCount((count)=>Math.max(count-1,0));
    }

    return[count, increaseCount, decreaseCount];
}

export default useCounter;