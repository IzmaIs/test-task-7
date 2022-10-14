import React from 'react';

const Alert: React.JSXElementConstructor<any> = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default Alert;