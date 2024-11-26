export const ModelCard = ({ model }) => (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
        <h2 className="text-lg font-semibold">{model.Model_Name}</h2>
        <p className="text-sm text-gray-600">Model ID: {model.Model_ID}</p>
    </div>
);