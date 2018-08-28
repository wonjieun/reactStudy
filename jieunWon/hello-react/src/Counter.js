import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    // () =>
    //버튼에서 클릭이벤트가 발생했을 때, this가 undefined으로 나타나는 것을 방지
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
        /*
        방법1
        this.setState(
            (state) => ({
                number: state.number
            })
        );
        방법2 (비구조화 할당...)
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );
        방법3
        const { number } = this.state;
        this.setState({
            number: number + 1
        })
        */
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    //이벤트 설정을 한 부분
    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                {/* <button onclick="alert('hello');">Click Me</button> */}
                {/* 1. camelCase 2. 메소드를 호출하지 않기 ()X */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;