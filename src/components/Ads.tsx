import React, {FC, useEffect, useState} from 'react';
import {getAds} from "../API/getAds";
import {RequestState} from "../types/general";
import {AdsBody} from "../models/adsBody";
import AdCard from "./AdCard";

const Ads: FC = () => {

    const [adsData, setAdsData] = useState<RequestState<AdsBody>>({
        loaded: false,
        items: []
    })

    useEffect(() => {
        getAds().then(res => setAdsData({
            loaded: true,
            items: res
        }))
    }, [])

    console.log(adsData)

    return (
        <div className='all-ads'>
            <AdCard/>
        </div>
    );
};

export default Ads;