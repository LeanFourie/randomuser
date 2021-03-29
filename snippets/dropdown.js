// Project Imports
import React from 'react'

export default class Dropdown extends React.Component {
    constructor() {
        super()

        this.state = {
            dropdownActive: false
        }
    }

    toggleDropdown = () => {
        this.state.dropdownActive
            ? this.setState({ dropdownActive: false })
            : this.setState({ dropdownActive: true })
    }

    render() {
        return (
            <label
                htmlFor="dropdown"
                className={ `dropdown ${ this.state.dropdownActive ? 'dropdown--active' : '' }` }
            >
                <input
                    type="text"
                    value={ this.props.value }
                    placeholder={ this.props.placeholder }
                    readOnly
                    className="dropdown__value"
                    onClick={ e => this.toggleDropdown() }
                />

                <ul
                    className={ `dropdown__menu ${ this.state.dropdownActive ? 'menu--active' : '' }` }
                >
                    { this.props.list.map((item, index) => {
                       return (
                        <li
                            key={ index }
                            className="menu__item"
                            onClick={(e) => {
                                this.props.setComponentValue(e)
                                this.toggleDropdown()
                            }}
                        >
                            { item }
                        </li>
                       )
                    })}
                </ul>
            </label>
        )
    }
}

// Usage
{/*
    
    OPTIONAL PROPS:
    - placeholder:      The placeholder value of the input inside the dropdown

    - classes:          This will add additional classes to the button
    

    REQUIRED PROPS:
    - value:                The value of the dropdown
                            Example: dropdownValue ? dropdownValue : ''
                            Example: Array[0]

    - list:                 The list of values to display in the dropdown

    - setComponentValue:    Used to set the state of the dropdown
                            Please use the 'updateComponentValue' function from the helpers.js file
                            updateComponentValue({
                                event: The click event that is passed through
                                stateKey: The endpoint that needs to change
                                bind: Used to bind 'this' to the function
                            })


    EXAMPLE OF ARRAY TO LOOP THROUGH FOR THE LIST OF VALUES:
    checkboxes: [
        'Value One',
        'Value Two',
        'Value Three'
    ]


    EXAMPLE:
    <Dropdown
        value={
            this.state.data != null && this.state.data.dropdownValue
            ? this.state.data.dropdownValue
            : ''
        }
        placeholder="Dropdown Placeholder"
        classes="text__element text__element--dropdown"
        list={ Array }
        setComponentValue={ e => {
            updateComponentValue({
                event: e,
                stateKey: 'data/dropdownValue',
                bind: this.setState.bind(this)
            })
        }}
    />

*/}
