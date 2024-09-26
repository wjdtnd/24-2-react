import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){
    const [isFull, setIsFull]=useState(false);
    const [count, increaseCount, decreaseCount]=useCounter(0);

    //마운트 되었을때(컴포넌트 생성)랑 업데이트 되었을때(컴포넌트 내의 상태가 변경됨) 실행됨
    useEffect(()=>{
        console.log("=================");
        console.log("useEffect 실행됨");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >=MAX_CAPACITY);
        console.log(`isFull : ${isFull}`);
    },[count]);

    //출력되게 하는걸 랜더링이라고함
    return(
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>수용시설에 입장</button>
            <button onClick={decreaseCount}>수용시설에 퇴장</button>
            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    )
}

export default Accommodate;