import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_APP_API_TOKEN;

const headers = {
    Authorization: "bearer " + token,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};