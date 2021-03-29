// Project Imports
import React from 'react'
import Router from 'next/router'
import { motion } from 'framer-motion'

// Snippets
import SvgIcon from './svgIcon'

export default class Link extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    navigate = ( link ) => {
        let route = link.route,
            target = link.target

        target != '_blank'
            ? Router.push(`/${ route }`) 
            : window.open(route, '_blank')
    }

    render () {
        return (
            <motion.div
                className={`
                    link
                    ${ this.props.classes ? this.props.classes : '' }
                    ${ this.props.icon ? 'link--icon' : '' }
                `}
            >
                <span
                    onClick={() => {
                        this.props.click && this.props.click()
                        this.props.link != undefined && this.navigate(this.props.link)
                    }}
                    className="link__inner"
                >
                    {/* Label */}
                    { this.props.label &&
                        <span className="link__label">
                            { this.props.label }
                        </span>
                    }
                    {/* ./Label */}

                    {/* Icon */}
                    { this.props.icon &&
                        <span className="link__icon">
                            <SvgIcon
                                icon={{
                                    name: 'icon__arrow-right-extended',
                                    class: 'icon__inner'
                                }}
                            />
                        </span>
                    }
                    {/* Icon */}
                </span>
            </motion.div>
        )
    }
}

// Usage
{/*

   OPTIONAL PROPS:
    - label:            This will add a label to the link

    - icon:             A boolean that determines if a link has an icon

    - classes:          This will add additional classes to the link

    
    REQUIRED PROPS:
    - click:            What should happen when the link is clicked


    FUNCTIONAL LINK: A link that performs an action
    <Link
        label="Functional Link"
        icon={ true }
        classes="text__element text__element--action"
        click={() => {
            alert('You clicked the link...')
        }}
    />


    INTERNAL LINK: A link that handles internal linking
    <Link
        label="Internal Routing Link"
        classes="text__element text__element--action"
        link={{
            route: 'about'
        }}
    />


    EXTERNAL LINK: A link that links to external websites
    <Link
        label="External Link Link"
        classes="text__element text__element--action"
        link={{
            route: 'https://www.google.com',
            target: '_blank'
        }}
    />

*/}
