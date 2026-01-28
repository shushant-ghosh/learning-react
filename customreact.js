function customRender(reactElement, container) {
    // Simple implementation to render a React-like element to the DOM manually
    /* 
    const { type, props, children } = reactElement;
    const element = document.createElement(type);
    element.innerHTML = children;
    element.setAttribute('href', props.href)
    element.setAttribute('target', props.target)
    container.appendChild(element)
    */

    // Using for look to take properties dynamically
    const {type, props, children} = reactElement
    const element = document.createElement(type)
    element.innerHTML = children

    for (let prop in props) {
        element.setAttribute(prop, props[prop])
    }

    container.appendChild(element)
}

const reactElement = {
    type: 'div',
    props: {
        href: 'http://www.google.com',
        target: '_blank',
        color:"blue"
    },
    children:"Click me to go to Google!"
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)