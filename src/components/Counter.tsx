import * as React from 'react';

interface IProps {

}

interface IState {
    counter: number;
}

export default class Counter extends React.Component<IProps, IState> {

    state: IState = {
        counter: 0,
    }

    onIncrement = () => {
        this.setState(
            ({counter}) => ({
                counter: counter + 1,
            })
        );
    }

    onDecrement = () => {
        this.setState(
            ({counter})=> ({ counter: counter - 1}),
        )
    }

    render() {
        return(
            <div>
                <h1>카운터</h1>
                <h3>{this.state.counter}</h3>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}