// Project Imports
import React from 'react'

// Helpers
import { fetchQuery } from './../helpers/fetchData'

// Layout
import DefaultTheme from './../layouts/default'

// Sections
import HomeUserListing from './../sections/homepage/listing'

export default class Home extends React.Component {
    // Fetch Data
    static async getInitialProps({ query }) {
        const page = await fetchQuery(`?results=10`)

        const requiredData = []

        for ( let user of page.results ) {
            let userInfo = {}

            userInfo.firstName = user.name.first,
            userInfo.lastName = user.name.last,
            userInfo.email = user.email,
            userInfo.cell = user.cell

            requiredData.push(userInfo)
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
                {/* Listing */}
                <HomeUserListing
                    users={ this.state.pageData }
                />
                {/* Listing */}
            </DefaultTheme>
        )
    }
}
