import React from "react";
import Card from "./Card";

function ProfileCard(){
    return(
        <div>
            <Card title="Kathy Minn" backgroundColor="#F361A6">
                <p>안녕하세요 ~ 민경주 입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>

            <Card title="Linda Kim" backgroundColor="#A566FF">
                <p>안녕하세요 ~ 김린다 입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>

            <Card title="Simon Je" backgroundColor="#86E57F">
                <p>안녕하세요 ~ 제승모 입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;