export default function InputText({ placeholder, updateValue }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => updateValue(e.target.value)}
        />
    );
}
