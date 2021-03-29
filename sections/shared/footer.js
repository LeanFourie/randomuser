// Project Imports
import React from 'react'

// Snippets
import Link from './../../snippets/link'

export default class Footer extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render () {
        return (
            <footer className="footer">
                <div className="footer__text">
                    <h6 className="text__element text__element--title">
                        A project by Léan Fourie.
                    </h6>
                    <Link
                        label="Visit website"
                        classes="text__element text__element--action"
                        link={{
                            route: 'https://leanfourie.co.za',
                            target: '_blank'
                        }}
                    />
                </div>
            </footer>
        )
    }
}
