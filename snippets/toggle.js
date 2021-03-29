// Project Imports
import React from 'react'

export default class Toggle extends React.Component {
    constructor() {
        super()

        this.toggle = React.createRef()
        this.state = {}
    }

    updateBackground = () => {
        let background = this.toggle.current.children[0]
        background.classList.add('background--expand')
        setTimeout(() => {
            background.classList.remove('background--expand')
        }, 150)
    }

    render() {
        return (
            <div
                ref={ this.toggle }
                className={ `toggle ${ this.props.classes ? this.props.classes : '' } ${ this.props.activeValue === true ? 'toggle--right' : 'toggle--left' }` }
            >
                <div className="toggle__background"></div>
                <div
                    className={ `toggle__selection selection--left ${ this.props.activeValue === false ? 'selection--active' : '' }` }
                    onClick={ () => {
                        this.updateBackground()
                        this.props.onClick()
                    }}
                >
                    <p className="selection__label">
                        { this.props.valueOne }
                    </p>
                </div>
                <div
                    className={ `toggle__selection selection--right ${ this.props.activeValue === true ? 'selection--active' : '' }` }
                    onClick={ () => {
                        this.updateBackground()
                        this.props.onClick()
                    }}
                >
                    <p className="selection__label">
                        { this.props.valueTwo }
                    </p>
                </div>
            </div>
        )
    }
}

// Usage
{/*

    REQUIRED PROPS:
    - valueOne:         The value of the left label

    - valueTwo:         The value of the right label

    - activeValue:      Check of the toggle is set to true or false
                        If there is no value set, please set the default value to false, unless true is required
                        Example: toggleValue ? toggleValue : false

    - onClick           Used to set the state of the toggle
                        Please use the 'setToggleValue' function from the helpers.js file
                        setToggleValue({
                            stateKey: The endpoint that needs to change
                            bind: Used to bind 'this' to the function
                        })


    EXAMPLE:
    <Toggle
        valueOne="False"
        valueTwo="True"
        activeValue={
            this.state.data != null && this.state.data.toggleValue
            ? this.state.data.toggleValue
            : false
        }
        onClick={() =>
            setToggleValue({
                stateKey: 'data/toggleValue',
                bind: this.setState.bind(this)
            })
        }
    />

*/}
