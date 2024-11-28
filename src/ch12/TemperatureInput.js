import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
const scaleName = {
    c: "섭씨",
    f: "화씨"
}

function TemperatureInput(props){
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target);
    }

    return (
        <fieldset>
            <legend>온도를 입력하세요.(단위 :{scaleName[props.scale]} ) :</legend>
            <input type="text" value={temperature} onChange={handleChange}/>
            <BoilingVerdict
                celsius={parseFloat(temperature)}
            />
        </fieldset>
    );
}

export default TemperatureInput;