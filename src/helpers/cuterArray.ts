import {AdsBody} from "../models/adsBody";

const cuterArray = (arr: Array<AdsBody>, limit: number) => {
    const result = []
    for (let i = 0; i < Math.ceil(arr?.length/limit);i++) {
        result?.push(arr?.slice((i * limit), (i * limit) + limit))
    }
    return result
}

export default cuterArray;