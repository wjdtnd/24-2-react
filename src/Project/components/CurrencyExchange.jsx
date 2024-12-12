import React, { useState } from "react";

function CurrencyExchange() {
    const [selectedTab, setSelectedTab] = useState("USD");

    const currencies = [
        { code: "USD", name: "$ 달러 USD" },
        { code: "JPY", name: "￥ 엔 JPY" },
        { code: "CNY", name: "元 위안 CNY" },
    ];

    return (
        <div className="main-container">
            <div className="tabs">
                {currencies.map((currency) => (
                    <div
                        key={currency.code}
                        onClick={() => setSelectedTab(currency.code)}
                        className={`tab ${selectedTab === currency.code ? "active" : ""}`}
                    >
                        {currency.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CurrencyExchange;
