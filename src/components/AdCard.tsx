import React, {FC} from 'react';

const AdCard: FC = () => {
    return (
        <div className='card'>
            <div className='card-image'>
            </div>
            <div className='card-footer'>
                <div className='card-footer-first-item'>
                    <span>123213 R</span>
                    <div className='card-footer-first-item-icons'>
                        <img/>
                        <img/>
                    </div>
                </div>
                <div className='card-footer-second-item'>
                    <span>66666 r</span>
                    <span>Name tovar</span>
                </div>
                <div className='card-footer-third-item'>
                    <span>gorod</span>
                    <span>wremia</span>
                </div>
            </div>
        </div>
    );
};

export default AdCard;