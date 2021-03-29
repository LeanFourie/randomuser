// Project Imports
import React from 'react'
import Router from 'next/router'
import { motion } from 'framer-motion'

// Snippets
import SvgIcon from './svgIcon'

export default class Link extends React.Component {
    constructor() {
        super()

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
                    ${ this.props.classes && this.props.classes }
                    ${ this.props.icon && this.props.icon.position ? 'link--icon-' + this.props.icon.position : '' }
                `}
                whileHover={ this.props.hoverAnimation }
                whileTap={ this.props.tapAnimation }
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
                                    name: this.props.icon.name,
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
    - label:            This will add a label to the button

    - icon:             This will add an icon to the button
                        The icon props is an object that takes two keys:
                        {
                            name: The name of the icon ( The icon should be placed under the assets/icons folder ) [ Required ]
                            position: Determines if the icon is on the left or right side of the button. Defaults to right [ Optional ]
                        }

    - classes:          This will add additional classes to the button

    - hoverAnimation:   What the button should do on hover
                        An object that takes css properties

    - tapAnimation:     What the button should do on click
                        An object that takes css properties

    
    REQUIRED PROPS:
    - click:            What should happen when the button is clicked


    FUNCTIONAL LINK: A link that performs an action
    <Link
        label="Functional Button"
        icon={{
            name: 'cube',
            position: 'left'
        }}
        classes="text__element text__element--action"
        click={() => {
            alert('You clicked the button...')
        }}
        hoverAnimation={{
            scale: 1.05
        }}
        tapAnimation={{
            scale: 0.95,
            borderRadius: "100%"
        }}
    />


    INTERNAL LINK: A link that handles internal linking
    <Link
        label="Internal Routing Button"
        icon={{
            name: 'cube'
        }}
        classes="text__element text__element--action"
        link={{
            route: 'about'
        }}
        hoverAnimation={{
            scale: 1.05
        }}
        tapAnimation={{
            scale: 0.95,
            borderRadius: "100%"
        }}
    />


    EXTERNAL LINK: A link that links to external websites
    <Link
        label="External Link Button"
        icon={{
            name: 'cube'
        }}
        classes="text__element text__element--action"
        link={{
            route: 'https://www.leanfourie.co.za',
            target: '_blank'
        }}
        hoverAnimation={{
            scale: 1.05
        }}
        tapAnimation={{
            scale: 0.95,
            borderRadius: "100%"
        }}
    />

*/}
