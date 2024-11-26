export default function Dropdown({ label, options, value, onChange, loading }) {
    return (
        <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">{label}</label>
            <select
                value={value}
                onChange={onChange}
                className="p-3 border rounded-lg w-full"
                disabled={loading}
            >
                <option value="" disabled>{loading ? "Loading..." : `Select a ${label}`}</option>
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
