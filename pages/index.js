// Project Imports
import React from 'react'

// Helpers
import { fetchQuery } from './../helpers/fetchData'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import HomeHero from './../sections/homepage/hero'

export default class Home extends React.Component {
    // Fetch Data
    static async getInitialProps({ query }) {
        const page = await fetchQuery(`?results=10`)

        const requiredData = {
            firstName: page.results.name.first,
            lastName: page.results.name.last,
            email: page.results.email,
            cell: page.results.cell
        }

        return { requiredData, query }
    }
    
    constructor(props) {
        super(props)

        this.state = {
            pageData: this.props.requiredData,
            query: this.props.query
        }
    }

    componentDidMount = () => {
        console.log(this.state.pageData)
    }

    render () {
        return (
            <DefaultTheme
                title="User Listing"
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
