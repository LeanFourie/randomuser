// Project Imports
import React from 'react'

// Snippets
import Button from './../../snippets/button'
import Modal from './../../snippets/modal'

export default class HomeUserListing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: this.props.users,
            showModal: false,
            userFirstname: '',
            userLastName: '',
            userEmail: '',
            userCell: ''
        }
    }

    showUserInfoModal = ( ...args ) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            userFirstname: args[0].firstName,
            userLastName: args[0].lastName,
            userEmail: args[0].email,
            userCell: args[0].cell
        }))
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
                                        <p className="text__element text__element--name">
                                            { user.firstName } { user.lastName }
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
                                            click={ () => {
                                                this.showUserInfoModal({
                                                    firstname: user.firstName,
                                                    lastName: user.lastName,
                                                    email: user.email,
                                                    cell: user.cell
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* ./List */}

                {/* Modal */}
                <Modal
                    title="User Information"
                    showModal={ this.state.showModal }
                    closeModal={ () => {
                        this.showUserInfoModal({
                            firstname: '',
                            lastName: '',
                            email: '',
                            cell: ''
                        })
                    }}
                >
                    <div className="details">
                        <div className="details__item details__item--name">
                            { this.state.userFirstName } { this.state.userLastName }
                        </div>
                        <div className="details__item details__item--email">
                            { this.state.userEmail }
                        </div>
                        <div className="details__item details__item--cell">
                            { this.state.userCell }
                        </div>
                    </div>
                </Modal>
                {/* ./Modal */}
            </section>
        )
    }
}
