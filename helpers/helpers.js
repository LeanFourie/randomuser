// Lowercase and join text
export const lowercaseText = (text, operator) => {
    return operator === undefined
            ? text.toLowerCase().split(' ').join('-')
            : text.toLowerCase().split(' ').join(operator)
}


// Uppercase text
export const capitalizeText = (str, lower = false) => {
    return ( lower ? str.toLowerCase() : str )
                .replace(/_/g, ' ')
                .replace(/-/g, ' ')
                .replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())
}


// Accordion
export const accordion = ( e, containerClass, parentClass ) => {
    let el = e.currentTarget,
        parent = el.closest( parentClass ),
        bodyContent = parent.children[1],
        allTabs = el.closest( containerClass ).children,
        totalHeight = 0
        
    Array.prototype.forEach.call(bodyContent.children, (child, index) => {
        totalHeight += child.offsetHeight
    })

    if ( parent.classList.contains('item--active') ) {
        parent.classList.remove('item--active')
        bodyContent.style.height = 0
        bodyContent.style.overflow = 'hidden'
    } else {
        Array.prototype.forEach.call(allTabs, (tab, index) => {
            tab.classList.remove('item--active')
            tab.children[1].style.height = 0
            tab.children[1].style.overflow = 'hidden'
        })

        parent.classList.add('item--active')
        bodyContent.style.height = totalHeight + 'px'
        setTimeout(() => {
            bodyContent.style.overflow = 'visible'
        }, 400)
    }
}


// Transsform strings into dot notation
const dotValue = (obj, keys, value = undefined) => {
    if ( typeof keys === 'string' ) keys = keys.split('.')
    const key = keys.shift()

    if ( value !== undefined && keys.length === 0 && obj !== undefined && key !== undefined ) obj[key] = value

    return (
        obj !== undefined && key !== undefined
            ? dotValue(obj[key], keys, value)
            : obj
    )
}


// Update input values of forms
export const updateComponentValue = ( ...args ) => {
    let e = args[0].event,
        setState = args[0].bind,
        stateKey = args[0].stateKey.split('/').join('.'),
        value = args[0].value ? args[0].value : (e != undefined ? ( e.currentTarget.value ? e.currentTarget.value : e.currentTarget.innerHTML ) : ''),
        thenFunc = args[0].thenFunc

    setState(prevState => {
        const result = { ...prevState }

        dotValue(result, stateKey, value)

        return result
    }, () => {
        if ( thenFunc != undefined ) thenFunc( ...args )
    })
}


// Update toggle components values
export const setToggleValue = ( ...args ) => {
    let setState = args[0].bind,
        stateKey = args[0].stateKey.split('/').join('.'),
        thenFunc = args[0].thenFunc

    setState(prevState => {
        const result = { ...prevState }

        dotValue(result, stateKey) === true ? dotValue(result, stateKey, false) : dotValue(result, stateKey, true)

        return result
    }, () => {
        if ( thenFunc != undefined ) thenFunc( e.target )
    })
}


// Convert string to array to array of objects
export const stringToObject = ( values ) => {
    return values.map((value) => {
        let obj = {
            label: value,
            checked: false
        }
        return obj
    })
}
