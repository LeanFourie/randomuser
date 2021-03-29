// Project Imports
import React from 'react'

// Layout
import DefaultTheme from './../layouts/default'

export default class About extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render () {
        return (
            <DefaultTheme
                title="NextJS Boilerplate"
                identifier="About Page"
            >
                Hello about!
            </DefaultTheme>
        )
    }
}
