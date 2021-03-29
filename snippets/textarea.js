// Project Imports
import React from 'react'

export default class Textarea extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <textarea
                value={ this.props.value }
                placeholder={ this.props.placeholder }
                className={ `textarea ${ this.props.classes ? this.props.classes : '' }` }
                onChange={ this.props.setComponentValue }
            ></textarea>
        )
    }
}

// Usage
{/*

    OPTIONAL PROPS:
    - placeholder:          The placeholder value of the input

    - classes:              This will add additional classes to the button


    REQUIRED PROPS:
    - value:                The value of the dropdown
                            Example: textareaValue ? textareaValue : ''

    - setComponentValue:    Used to set the state of the textarea
                            Please use the 'updateComponentValue' function from the helpers.js file
                            updateComponentValue({
                                event: The click event that is passed through
                                stateKey: The endpoint that needs to change
                                bind: Used to bind 'this' to the function
                            })


    EXAMPLE:
    <Textarea
        value={
            this.state.data != null && this.state.data.textareaValue
            ? this.state.data.textareaValue
            : ''
        }
        placeholder="Textarea Placeholder"
        classes="text__element text__element--textarea"
        setComponentValue={ e => {
            updateComponentValue({
                event: e,
                stateKey: 'data/textareaValue',
                bind: this.setState.bind(this)
            })
        }}
    />

*/}
