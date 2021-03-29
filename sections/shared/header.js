// Project Imports
import React from 'react'

export default class Header extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render () {
        return (
            <header className="header">
                <div className="header__text">
                    <h2 className="text__element text__element--title">
                        Random User App
                    </h2>
                    <h6 className="text__element text__element--paragraph">
                        Version 1.0
                    </h6>
                </div>
            </header>
        )
    }
}
