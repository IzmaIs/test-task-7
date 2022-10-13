import axios from "axios";
import {AdsBody} from "../models/adsBody";
import {Request} from "../types/general";

export const getAds = async () => {
    try {
        const response = await axios.get <Request<AdsBody>>('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
        return response?.data
    } catch (error) {
        console.log(error)
    }
}