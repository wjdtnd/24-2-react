import React from 'react';
import Button from "./Button";
function BackDialog(props) {
    return (
        <div>
            <p>내용이 다르면 취소 버튼을 눌러주세요.</p>
            <Button color={'red'}>취소</Button>
        </div>
    )
}
export default BackDialog;