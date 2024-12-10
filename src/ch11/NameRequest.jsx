import React, {useState} from "react";

function NameRequest(props){
    const[name, setName]=useState('')
    const[details,setDetails]=useState('')
    const[fruit,setFruit]=useState('수박')
    const[file,setFile]=useState('')

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "details":
                setDetails(target.value);
                break;
            case "fruit":
                setFruit(target.value);
                break;
            case "file":
                setFile(target.value);
                break;
        }
    }

    const handleSubmit = (event) => {
        alert(`
        입력한 이름 : ${name}
        상세한 내용 : ${details}
        선택한 과일 : ${fruit}
        업로드 한 파일명 : ${file}
        `);
        event.preventDefault();//다른페이지로 전송되는걸 방지하는것, 링크 뒤에 ? 물음표 붙는거 방지
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                성명 :
                <input id="name" type="text" value={name} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                요청사항 :
                <input id="details" value={details} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                좋아하는 과일 선택 :
                <select id="fruit" value={fruit} onChange={handleChange}>
                    <option>수박</option>
                    <option>사과</option>
                    <option>포도</option>
                    <option>바나나</option>
                </select>
            </label><br/><br/>
            <label>
                파일선택 :
                <input id="file" type="file" onChange={handleChange}/>
            </label><br/><br/>
            <button type="submit">제출</button>


        </form>
    );
}

export default NameRequest;