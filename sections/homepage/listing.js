// Project Imports
import React from 'react'

// Helpers
import {
    updateComponentValue,
    setToggleValue
} from './../../helpers/helpers'

// Snippets
import Button from './../../snippets/button'

export default class HomeUserListing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: this.props.users
        }
    }

    render () {
        return (
            <section className="section section--listing">
                {/* Header */}
                <div className="titles">
                    <h6 className="titles__element">
                        User name
                    </h6>
                    <h6 className="titles__element">
                        Actions
                    </h6>
                </div>
                {/* ./Header */}

                {/* List */}
                <div className="list">
                    { ( this.props.users && this.props.users.length) > 0 &&
                        this.props.users.map((user, index) => {
                            return (
                                <div
                                    key={ index }
                                    className={ `list__item list__item--${ index + 1 }` }
                                >
                                    <div
                                        className="item__text"
                                        data-title="User name"
                                    >
                                        <p className="text__element text__element--firstname">
                                            { user.firstName }
                                        </p>
                                        <p className="text__element text__element--lastname">
                                            { user.lastName }
                                        </p>
                                    </div>
                                    <div
                                        className="item__actions"
                                        data-title="Actions"
                                    >
                                        <Button
                                            label={ `View details` }
                                            classes="actions__element"
                                            hoverAnimation={{
                                                scale: 1.05
                                            }}
                                            tapAnimation={{
                                                scale: 0.95,
                                                borderRadius: "100%"
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* ./List */}
            </section>
        )
    }
}
