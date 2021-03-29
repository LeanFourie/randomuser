// Project Imports
import React from 'react'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import HomeHero from './../sections/homepage/hero'

export default class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render () {
        return (
            <DefaultTheme
                title="NextJS Boilerplate"
                identifier="Home Page"
            >
                {/* Hero */}
                <HomeHero
                    title="Hello from the hero."
                />
                {/* ./Hero */}
            </DefaultTheme>
        )
    }
}
