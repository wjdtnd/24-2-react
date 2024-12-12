import React, { useState, useEffect } from 'react';
import Card from './Card';
import HBank from '../imgs/hana.jpg';
import WBank from '../imgs/woori2.jpg';
import NBank from '../imgs/nh2.jpg';

const listings = [
    {
        id: 1,
        BankName: "하나은행",
        price: 1452.68, // 환율: 달러 -> 원
        period: 5,
        imageUrl: HBank,
    },
    {
        id: 2,
        BankName: "우리은행",
        price: 1441.30,
        period: 3,
        imageUrl: WBank,
    },
    {
        id: 3,
        BankName: "농협은행",
        price: 1427.70,
        period: 1,
        imageUrl: NBank,
    },
];

function CardContainer({ money, category }) {
    console.log("CardContainer Rendered. Money:", money, "Category:", category);

    const exchangeRates = {
        USD: 1,
        JPY: 0.008,
        CNY: 180,
    };

    const [cards, setCards] = useState(listings);

    useEffect(() => {
        const dollar = parseFloat(money);

        if (!Number.isNaN(dollar) && dollar > 0) {
            const updatedCards = listings.map((listing) => ({
                ...listing,
                converted: (dollar * listing.price * exchangeRates[category]).toFixed(2),
            }));

            setCards(updatedCards);
        } else {
            const updatedCards = listings.map((listing) => ({
                ...listing,
                converted: "0.00",
            }));

            setCards(updatedCards);
        }
    }, [money, category]);

    return (
        <div className="card-container">
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
}

export default CardContainer;
