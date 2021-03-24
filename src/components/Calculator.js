import React, { Component } from 'react';
import './Calculator.css';
import Result from './Result';
import KeyPad from "./KeyPad";

class Calculator extends Component {
    constructor(props){
        super(props)
        this.handleButton = this.handleButton.bind(this)
        this.state = {calculate: ''}
    }


    handleButton(event){
        let result;
        let calculate;
        switch(event){
            case '=':
                try {
                    result = eval(this.state.calculate).toString()
                    calculate = result
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        calculate = 'error';
                    }
                }
                break
            case 'C': 
                calculate = ''
                break
            case 'CE': 
                calculate = this.state.calculate.substring(0,this.state.calculate.length - 1)
                break
            default:
                calculate = this.state.calculate + event
        }
        this.setState({calculate})
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result 
                        return={this.state.calculate}/>
                    <KeyPad 
                        onButton={this.handleButton}/>
                </div>
            </div>
        );
    }
}

export default Calculator;