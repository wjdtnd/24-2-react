import React from "react";

//// 클래스 필드 문법 사용하여 bind라는

class MyButton extends React.Component{
    constructor(props) {
        super(props);

        this.state={isToggleOn: true}
    }

    handleClick(){
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick={()=>this.handleClick()}>
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }

}

export default MyButton;