// Project Imports
import React from 'react'

export default class Checkbox extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <button
                className={ `checkbox ${ this.props.classes ? this.props.classes : '' } ${ this.props.isChecked ? 'checkbox--active' : '' }` }
                onClick={ (e) => {
                    this.props.onClick(e)
                }}
            >
                {/* Box */}
                <span className="checkbox__box"></span>
                {/* ./Box */}

                {/* Label */}
                <span className="checkbox__label">
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
    - classes:          This will add additional classes to the checkbox

    
    REQUIRED PROPS:
    - label:            The label displayed with the checkbox

    - isChecked:        The state of the checkbox

    - onClick:          Used to set the state of the checkbox
                        Please use the 'setToggleValue' function from the helpers.js file
                        setToggleValue({
                            stateKey: The endpoint that needs to change
                            bind: Used to bind 'this' to the function
                        })


    EXAMPLE OF ARRAY TO LOOP THROUGH:
    checkboxes: [
        {
            label: 'Checkbox One',
            checked: false
        },
        {
            label: 'Checkbox Two',
            checked: false
        },
        {
            label: 'Checkbox Three',
            checked: false
        }
    ]


    OUTSIDE LOOP:
    <Checkbox
        label={ checboxValue.label }
        isChecked={ checboxValue.checked }
        classes="text__element text__element--checkbox"
        onClick={() => {
            setToggleValue({
                stateKey: `data/checboxValue/checked`,
                bind: this.setState.bind(this)
            })
        }}
    />


    INSIDE LOOP:
    Array.map((value, index) => (
        <Checkbox
            key={ index }
            label={ value.label }
            isChecked={ value.checked }
            classes={ `text__element text__element--checkbox checkbox--${ index + 1 }` }
            onClick={() => {
                setToggleValue({
                    stateKey: `data/checboxValues/${ index }/checked`,
                    bind: this.setState.bind(this)
                })
            }}
        />
    ))

*/}
