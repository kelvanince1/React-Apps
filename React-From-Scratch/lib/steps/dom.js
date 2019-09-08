const TinyReact = (() => {
    function createElement(type, attributes = {}, ...children) {
        return {
            type,
            children,
            props: attributes
        }
    }

    return {
        createElement
    }
});