import useToggle from "./useToggle";

export default function ToggleComponent() {
    const [value, setValue] = useToggle(false);

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Set true</button>
            <button onClick={() => toggleValue(false)}>Set false</button>
        </div>
    )
}