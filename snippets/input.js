// Project Imports
import React from 'react'

export default class Input extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <input
                type={ this.props.type ? this.props.type : 'text' }
                value={ this.props.value }
                placeholder={ this.props.placeholder }
                className={ `input input--type-${ this.props.type } ${ this.props.classes ? this.props.classes : '' }` }
                onChange={ this.props.setComponentValue }
            />
        )
    }
}

// Usage
{/*
    
    OPTIONAL PROPS:
    - type:                 Sets the type for the input

    - placeholder:          The placeholder value of the input

    - classes:              This will add additional classes to the button


    REQUIRED PROPS:
    - value:                The value of the dropdown
                            Example: inputValue ? inputValue : ''

    - setComponentValue:    Used to set the state of the input
                            Please use the 'updateComponentValue' function from the helpers.js file
                            updateComponentValue({
                                event: The click event that is passed through
                                stateKey: The endpoint that needs to change
                                bind: Used to bind 'this' to the function
                            })


    EXAMPLE:
    <Input
        type="text"
        value={
            this.state.data != null && this.state.data.inputValue
            ? this.state.data.inputValue
            : ''
        }
        placeholder="Input Placeholder"
        classes="text__element text__element--input"
        setComponentValue={ e => {
            updateComponentValue({
                event: e,
                stateKey: 'data/inputValue',
                bind: this.setState.bind(this)
            })
        }}
    />

*/}
