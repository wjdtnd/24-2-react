import React, {useState} from "react";

function NameForm(props){
    const[name, setName]=useState('')

    const handleChange = (event) => {
        setName(event.target.value.toUpperCase());
    }

    const handleSubmit = (event) => {
        alert(`입력한 이름 : ${name}`);
        event.preventDefault();//다른페이지로 전송되는걸 방지하는것, 링크 뒤에 ? 물음표 붙는거 방지
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                성명 :
                <input type = "text" value={name} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;