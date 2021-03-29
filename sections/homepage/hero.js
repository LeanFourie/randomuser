// Project Imports
import React from 'react'

// Helpers
import {
    updateComponentValue,
    setToggleValue
} from './../../helpers/helpers'

// Snippets
import Button from './../../snippets/button'
import Checkbox from './../../snippets/checkbox'
import Dropdown from './../../snippets/dropdown'
import Input from './../../snippets/input'
import Link from './../../snippets/link'
import Radio from './../../snippets/radio'
import Textarea from './../../snippets/textarea'
import Toggle from './../../snippets/toggle'

export default class HomeHero extends React.Component {
    constructor() {
        super()

        this.state = {
            data: {
                listValues: [
                    { label: 'One', checked: false },
                    { label: 'Two', checked: false },
                    { label: 'Three', checked: false }
                ],
                checboxValues: [
                    { label: 'Checkbox One', checked: false },
                    { label: 'Checkbox Two', checked: false },
                    { label: 'Checkbox Three', checked: false }
                ],
                radioValues: [
                    { label: 'Radio One', checked: false },
                    { label: 'Radio Two', checked: false },
                    { label: 'Radio Three', checked: false }
                ]
            }
        }
    }

    render () {
        return (
            <section className="section section--hero">
                <div className="text">
                    <h1 className="text__element text__element--title">
                        { this.props.title }
                    </h1>

                    {/* Buttons */}
                    <Button
                        label="Functional Button"
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
                        icon={{
                            name: 'cube',
                            position: 'left'
                        }}
                    />
                    <Button
                        label="Internal Routing Button"
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
                        icon={{
                            name: 'cube'
                        }}
                    />
                    <Button
                        label="External Link Button"
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
                    {/* ./Buttons */}

                    {/* Links */}
                    <Link
                        label="Functional Link"
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
                        icon={{
                            name: 'cube'
                        }}
                    />
                    <Link
                        label="Internal Routing Link"
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
                    <Link
                        label="External Link link"
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
                    {/* ./Links */}

                    {/* Input */}
                    <Input
                        type="text"
                        value={
                            this.state.data != null && this.state.data.inputValue
                            ? this.state.data.inputValue
                            : ''
                        }
                        placeholder="Input Placeholder"
                        classes="text__element text__element--input"
                        setComponentValue={ e => {
                            updateComponentValue({
                                event: e,
                                stateKey: 'data/inputValue',
                                bind: this.setState.bind(this)
                            })
                        }}
                    />
                    {/* ./Input */}

                    {/* Textarea */}
                    <Textarea
                        value={
                            this.state.data != null && this.state.data.textareaValue
                            ? this.state.data.textareaValue
                            : ''
                        }
                        placeholder="Textarea Placeholder"
                        classes="text__element text__element--textarea"
                        setComponentValue={ e => {
                            updateComponentValue({
                                event: e,
                                stateKey: 'data/textareaValue',
                                bind: this.setState.bind(this)
                            })
                        }}
                    />
                    {/* ./Textarea */}

                    {/* Dropdown */}
                    <Dropdown
                        value={
                            this.state.data != null && this.state.data.dropdownValue
                            ? this.state.data.dropdownValue
                            : ''
                        }
                        placeholder="Dropdown Placeholder"
                        classes="text__element text__element--dropdown"
                        list={ this.state.data.listValues.map(val => { return val.label }) }
                        setComponentValue={ e => {
                            updateComponentValue({
                                event: e,
                                stateKey: 'data/dropdownValue',
                                bind: this.setState.bind(this)
                            })
                        }}
                    />
                    {/* ./Dropdown */}

                    {/* Toggle */}
                    <Toggle
                        valueOne="False"
                        valueTwo="True"
                        activeValue={
                            this.state.data != null && this.state.data.toggleValue
                            ? this.state.data.toggleValue
                            : false
                        }
                        onClick={() =>
                            setToggleValue({
                                stateKey: 'data/toggleValue',
                                bind: this.setState.bind(this)
                            })
                        }
                    />
                    {/* ./Toggle */}

                    {/* Checkbox */}
                    {
                        this.state.data.checboxValues.map((value, index) => (
                            <Checkbox
                                key={ index }
                                label={ value.label }
                                isChecked={ value.checked }
                                classes={ `text__element text__element--checkbox checkbox--${ index + 1 }` }
                                onClick={() => {
                                    setToggleValue({
                                        stateKey: `data/checboxValues/${ index }/checked`,
                                        bind: this.setState.bind(this)
                                    })
                                }}
                            />
                        ))
                    }
                    {/* ./Checkbox */}

                    {/* Radio */}
                    {
                        this.state.data.radioValues.map((value, index) => (
                            <Radio
                                key={ index }
                                label={ value.label }
                                isChecked={ value.checked }
                                classes={ `text__element text__element--radio radio--${ index + 1 }` }
                                onClick={ e => {
                                    let label = e.target.closest(`.text__element--radio`).children[1].innerHTML

                                    this.state.data.radioValues.forEach((obj, i) => {
                                        if ( obj.label === label ) {
                                            setToggleValue({
                                                stateKey: `data/radioValues/${ index }/checked`,
                                                bind: this.setState.bind(this)
                                            })
                                        } else {
                                            updateComponentValue({
                                                value: false,
                                                stateKey: `data/radioValues/${ i }/checked`,
                                                bind: this.setState.bind(this)
                                            })
                                        }
                                    })
                                }}
                            />
                        ))
                    }
                    {/* ./Radio */}
                </div>
            </section>
        )
    }
}
