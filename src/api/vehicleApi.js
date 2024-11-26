import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchVehicleModels = async (makeId, year) => {
    try {
        const response = await axios.get(
            `${apiUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );
        return response.data.Results || [];
    } catch (err) {
        throw new Error('Failed to fetch vehicle models');
    }
};

export const fetchVehicleMakes = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/GetMakesForVehicleType/car?format=json`
        );
        return response.data.Results || [];
    } catch (err) {
        throw new Error('Failed to fetch vehicle makes');
    }
};
