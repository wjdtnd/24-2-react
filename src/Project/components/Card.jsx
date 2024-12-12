import React from 'react';

const Card = React.memo(({ BankName, price, period, imageUrl, converted }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={BankName} />
            <h3>{BankName}</h3>
            <p>환율 : {price} KRW</p>
            <p>소요기간 : {period} 일</p>
            <p>변환금액 : {converted} KRW</p>
        </div>
    );
});

export default Card;