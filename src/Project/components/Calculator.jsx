import React, { useState } from "react";
import CardContainer from './CardContainer';

function Calculator() {
    const [money, setMoney] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("USD");

    const handleMoneyChange = (e) => {
        setMoney(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const renderCardContainer = money !== "" ? <CardContainer money={money} category={selectedCategory} /> : null;

    return (
        <div className="calculator" style={{ textAlign: "center" }}>
            <h1>은행별 환율 비교하기</h1>

            <div>
                <fieldset>
                    <legend>필요한 만큼의 달러를 입력하고 엔터를 쳐주세요. :</legend>
                    <input
                        type="number"
                        value={money}
                        onChange={handleMoneyChange}
                        placeholder="Enter dollars"
                        className="input-box"
                    />
                </fieldset>
            </div>

            {renderCardContainer}
        </div>
    );
}

export default Calculator;
