// Project Imports
import React from 'react'

// Snippets
import Button from './button'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        if ( !this.props.showModal ) {
            return null
        }

        return (
            <div className="modal">
                <div className="modal__content">
                    {/* Header */}
                    <div className="content__header">
                        <h5 className="header__element header__element--title">
                            { this.props.title }
                        </h5>
                        <Button
                            icon={{
                                name: 'close'
                            }}
                            classes={`header__element header__element--action button--danger`}
                            click={ this.props.closeModal }
                            hoverAnimation={{
                                scale: 1.05
                            }}
                            tapAnimation={{
                                scale: 0.95,
                                borderRadius: "100%"
                            }}
                        />
                    </div>
                    {/* ./Header */}

                    {/* Body Content */}
                    <div className="content__body">
                        { this.props.children }
                    </div>
                    {/* ./Body Content */}
                </div>
            </div>
        )
    }
}
