import React, {FC} from 'react';
import Ads from "../components/Ads";

const MainPage: FC = () => {
    return (
        <div className='ads-page'>
            <h3>Похожие объявления</h3>
            <Ads/>
        </div>
    );
};

export default MainPage;