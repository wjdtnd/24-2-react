import React from "react";

function MoneyInput(props){

    const handleChange = (event) => {
        props.onMoneyChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>환전하고 싶은 금액을 입력하세요.(단위 : 달러 ) :</legend>
            <input type="text" value={props.money} onChange={handleChange}/>
        </fieldset>
    );
}

export default MoneyInput;