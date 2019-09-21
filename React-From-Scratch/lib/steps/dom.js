const TinyReact = (function () {
    function createElement(type, attributes = {}, ...children) {
        let childElements = [].concat(...children).reduce(
            (acc, child) => {
                if (child !== null && child !== true && child !== false) {
                    if (child instanceof Object) {
                        acc.push(child);
                    } else {
                        acc.push(
                            createElement('text', {
                                textContent: child
                            })
                        )
                    }
                }
                return acc;
            },
        []);

        return {
            type,
            children: childElements,
            props: Object.assign({ children: childElements }, attributes)
        }
    }

    const render = function(vdom, container, oldDom = container.firstChild) {
        diff(vdom, container, oldDom);
    }

    const diff = function(vdom, container, oldDom) {
        let oldvdom = oldDom && oldDom._virtualElement;

        if (!oldDom) {
            mountElement(vdom, container, oldDom);
        } else if (oldvdom && oldvdom.type === vdom.type) {
            if (oldvdom.type === 'text') {
                updateTextNode(oldDom, vdom, oldvdom);
            } else {
                updateDomElement(oldDom, vdom, oldvdom);
            }

            oldDom._virtualElement = vdom;

            // Recursively diff children
            vdom.children.forEach((child, i) => {
                diff(child, oldDom, oldDom.childNodes[i]);
            });

            // Remove old nodes
            let oldNodes = oldDom.childNodes;
            if (oldNodes.length > vdom.children.length) {
                for (let i = oldNodes.length - 1; i >= vdom.children.length; i -= 1) {
                    let nodeToBeRemoved = oldNodes[i];
                    unmountNode(nodeToBeRemoved, oldDom);
                }
            }
        }
    }

    function unmountNode(domElement, parentComponent) {
        domElement.remove();
    }

    const mountElement = function(vdom, container, oldDom) {
        return mountSimpleNode(vdom, container, oldDom);
    }

    const mountSimpleNode = function(vdom, container, oldDomElement, parentComponent) {
        let newDomElement = null;
        const nextSibling = oldDomElement && oldDomElement.nextSibling;

        if (vdom.type === 'text') {
            newDomElement = document.createTextNode(vdom.props.textContent);
        } else {
            newDomElement = document.createElement(vdom.type);
            updateDomElement(newDomElement, vdom);
        }

        newDomElement._virtualElement = vdom;

        if (nextSibling) {
            container.insertBefore(newDomElement, nextSibling);
        } else {
            container.appendChild(newDomElement);
        }

        vdom.children.forEach(child => {
            mountElement(child, newDomElement);
        })
    }

    function updateDomElement(domElement, newVirtualElement, oldVirtualElement = {}) {
        const newProps = newVirtualElement.props || {};
        const oldProps = oldVirtualElement.props || {};
        Object.keys(newProps).forEach(propName => {
            const newProp = newProps[propName];
            const oldProp = oldProps[propName];
            if (newProp !== oldProp) {
                if (propName.slice(0, 2) === "on") {
                    // prop is an event handler
                    const eventName = propName.toLowerCase().slice(2);
                    domElement.addEventListener(eventName, newProp, false);
                    if (oldProp) {
                        domElement.removeEventListener(eventName, oldProp, false);
                    }
                } else if (propName === "value" || propName === "checked") {
                    // this are special attributes that cannot be set
                    // using setAttribute
                    domElement[propName] = newProp;
                } else if (propName !== "children") {
                    // ignore the 'children' prop
                    if (propName === "className") {
                        domElement.setAttribute("class", newProps[propName]);
                    } else {
                        domElement.setAttribute(propName, newProps[propName]);
                    }
                }
            }
        });
        // remove oldProps
        Object.keys(oldProps).forEach(propName => {
            const newProp = newProps[propName];
            const oldProp = oldProps[propName];
            if (!newProp) {
                if (propName.slice(0, 2) === "on") {
                    // prop is an event handler
                    domElement.removeEventListener(propName, oldProp, false);
                } else if (propName !== "children") {
                    // ignore the 'children' prop
                    domElement.removeAttribute(propName);
                }
            }
        });
    }

    function updateTextNode(domElement, newVirtualElement, oldVirtualElement) {
        if (newVirtualElement.props.textContent !== oldVirtualElement.props.textContent) {
            domElement.textContent = newVirtualElement.props.textContent;
        }
        // Set a reference to the newvddom in oldDom
        domElement._virtualElement = newVirtualElement;
    }

    function unmountNode(domElement, parentComponent) {
        const virtualElement = domElement._virtualElement;
        if (!virtualElement) {
            domElement.remove();
            return;
        }

        // If component exist
        let oldComponent = domElement._virtualElement.component;
        if (oldComponent) {
            oldComponent.componentWillUnmount();
        }

        // Recursive calls agains
        while (domElement.childNodes.length > 0) {
            unmountNode(domElement.firstChild);
        }

        if (virtualElement.props && virtualElement.props.ref) {
            virtualElement.props.ref(null);
        }

        // Clear out event handlers
        Object.keys(virtualElement.props).forEach(propName => {
            if (propName.slice(0, 2) === "on") {
                const event = propName.toLowerCase().slice(2);
                const handler = virtualElement.props[propName];
                domElement.removeEventListener(event, handler);
            }
        });

        domElement.remove();
    }

    return {
        createElement,
        render
    }
}());