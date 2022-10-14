import React, {FC, useEffect, useState} from 'react';
import {getAds} from "../API/getAds";
import {RequestState} from "../types/general";
import {AdsBody} from "../models/adsBody";
import AdCard from "./AdCard";
import Loader from "./Loader";
import cuterArray from "../helpers/cuterArray";
import Alert from "./Alert";

const Ads: FC = () => {

    const [adsData, setAdsData] = useState<RequestState<AdsBody>>({
        loaded: false,
        items: []
    })

    const [limit, setLimit] = useState(16)

    const [isShowAlert, setIsShowAlert] = useState(false)

    useEffect(() => {
        getAds().then(res => setAdsData({
            loaded: true,
            items: res
        }))
    }, [])

    useEffect(() => {
        limit > 100 && setIsShowAlert(true)
    }, [limit])

    useEffect(() => {
        setTimeout(() => setIsShowAlert(false), 2000)
    }, [isShowAlert])

    return (
        <div>
            <div className='all-ads'>
                {adsData?.loaded
                    ? adsData?.items?.length
                        ? cuterArray(adsData?.items, limit)[0].map(ad => (
                            <AdCard
                                id={ad.id}
                                date={ad.date}
                                key={ad.id}
                                seen={ad.seen}
                                locality={ad.locality}
                                oldPrice={ad.oldPrice}
                                price={ad.price}
                                title={ad.title}
                            />
                        ))
                        : <div><p>Объявлений нет</p></div>
                    : <Loader/>
                }

            </div>
            {adsData?.loaded  &&
                <div className='card-btn' style={{display: `${limit > 100 ? 'none' : ''}`}}>
                    <button
                        onClick={() => limit < 100 && setLimit(limit + 16)}
                    >
                        Показать еще
                    </button>
                </div>
            }
            {
                isShowAlert &&
                <Alert
                    className='alert'
                >
                    <div className='alert-message'>
                        <h3>Все объявления показаны</h3>
                    </div>
                </Alert>
            }
        </div>
    );
};

export default Ads;