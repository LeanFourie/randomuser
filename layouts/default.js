// Project Imports
import React from 'react'

// NextJS imports
import Head from 'next/head'

// Helpers
import { lowercaseText } from '../helpers/helpers'

// Sections
import Header from './../sections/shared/header'
import Footer from './../sections/shared/footer'

export default class DefaultTheme extends React.Component {
    constructor() {
        super()

        this.state = {}
	}
	
	render () {
		return (
			<div className="theme theme--default">
				{/* SEO */}
				<Head>
					<title>{ this.props.title } </title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				{/* ./SEO */}

				{/* Header */}
				<Header />
				{/* ./Header */}
	
				{/* Pages */}
				<div className={ `page page--${ this.props.identifier ? lowercaseText(this.props.identifier) : 'default' }` }>
					{ this.props.children }
				</div>
				{/* ./Pages */}

				{/* Footer */}
				<Footer />
				{/* ./Footer */}
			</div>
		)
	}
}
