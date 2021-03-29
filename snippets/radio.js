// Project Imports
import React from 'react'

export default class Radio extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <button
                className={ `radio ${ this.props.classes ? this.props.classes : '' } ${ this.props.isChecked ? 'radio--active' : '' }` }
                onClick={ (e) => {
                    this.props.onClick(e)
                }}
            >
                {/* Box */}
                <span className="radio__box"></span>
                {/* ./Box */}

                {/* Label */}
                <span className="radio__label">
                    { this.props.label }
                </span>
                {/* ./Label */}
            </button>
        )
    }
}

// Usage
{/*
    
    OPTIONAL PROPS:
    - classes:          This will add additional classes to the radio

    
    REQUIRED PROPS:
    - label:            The label displayed with the radio

    - isChecked:        The state of the radio

    - onClick:          Used to set the state of the radio
                        Please use the 'setToggleValue' function from the helpers.js file
                        setToggleValue({
                            stateKey: The endpoint that needs to change
                            bind: Used to bind 'this' to the function
                        })


    EXAMPLE OF ARRAY TO LOOP THROUGH:
    radios: [
        {
            label: 'Radio One',
            checked: false
        },
        {
            label: 'Radio Two',
            checked: false
        },
        {
            label: 'Radio Three',
            checked: false
        }
    ]


    INSIDE LOOP: This cannont be used outside of a loop
    Array.map((value, index) => (
        <Radio
            key={ index }
            label={ value.label }
            isChecked={ value.checked }
            classes={ `text__element text__element--checkbox checkbox--${ index + 1 }` }
            onClick={ e => {
                // Get the label of the clicked radio button
                let label = e.target.closest(`.radio`).children[1].innerHTML

                this.state.data.radioValues.forEach((obj, i) => {
                    // Toggle clicked radio button state
                    if ( obj.label === label ) {
                        setToggleValue({
                            stateKey: `data/radioValues/${ index }/checked`,
                            bind: this.setState.bind(this)
                        })
                    } else {
                        // Set other radio button states to false
                        updateComponentValue({
                            value: false,
                            stateKey: `data/radioValues/${ i }/checked`,
                            bind: this.setState.bind(this)
                        })
                    }
                })
            }}
        />
    ))

*/}
