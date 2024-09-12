import React from 'react';
import Comment from "./Comment";
import comment from "./Comment";

const commnets = [
    {
        name:"민경주",
        comment:"추석연휴 잘 보내고 오세요.",
    },
    {
        name:"차기환",
        comment:"집에 언제 가나~ 차막혀서",
    },
    {
        name:"정구영",
        comment:"프로젝트 예습용, 실습용을 나눌게요.",
    },
];

function CommentList(props){
    return(
        <div>
            {
                commnets.map((comment)=>{
                    return (
                        <Comment name={comment.name} comment={comment.comment}/>
                    );
                })
            }
            <Comment name={"민경주"} comment={"컴포넌트 합성 실습을 하고 있습니다."}/>
    </div>
    );
}

export default CommentList;



