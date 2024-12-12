import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">환전 비교하기</div>
            <nav>
                <a href="/">홈</a>
                <a href="/experiences">가까운 은행찾기</a>
                <a href="/online">문의하기</a>
            </nav>
        </header>
    );
}

export default Header;