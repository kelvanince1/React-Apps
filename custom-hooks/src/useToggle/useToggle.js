import {useState} from 'react';

export default function useToggle(value) {
    const [value, setValue] = useState(value);

    function toggleValue(toggle) {
        setValue(currentValue => typeof value === "boolean" ? value : !currentValue)
    }

    return [value, toggleValue]
}