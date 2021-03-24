import React, {Component} from 'react';

class KeyPadComponent extends Component {

    constructor(props){
        super(props);
        this.handleButton = this.handleButton.bind(this)
    }

    handleButton(event){
        this.props.onButton(event.target.value)
    }

    render() {
        return (
            <div className="button">
                <button name="(" onClick={this.handleButton} value='('>(</button>
                <button name="CE" onClick={this.handleButton} value='CE'>CE</button>
                <button name=")" onClick={this.handleButton} value=')'>)</button>
                <button name="C" onClick={this.handleButton} value='C'>C</button><br/>
                <button name="1" onClick={this.handleButton} value='1'>1</button>
                <button name="2" onClick={this.handleButton} value='2'>2</button>
                <button name="3" onClick={this.handleButton} value='3'>3</button>
                <button name="+" onClick={this.handleButton} value='+'>+</button><br/>
                <button name="4" onClick={this.handleButton} value='4'>4</button>
                <button name="5" onClick={this.handleButton} value='5'>5</button>
                <button name="6" onClick={this.handleButton} value='6'>6</button>
                <button name="-" onClick={this.handleButton} value='-'>-</button><br/>
                <button name="7" onClick={this.handleButton} value='7'>7</button>
                <button name="8" onClick={this.handleButton} value='8'>8</button>
                <button name="9" onClick={this.handleButton} value='9'>9</button>
                <button name="*" onClick={this.handleButton} value='*'>*</button><br/>
                <button name="." onClick={this.handleButton} value='.'>.</button>
                <button name="0" onClick={this.handleButton} value='0'>0</button>
                <button name="=" onClick={this.handleButton} value='='>=</button>
                <button name="/" onClick={this.handleButton} value='/'>/</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;