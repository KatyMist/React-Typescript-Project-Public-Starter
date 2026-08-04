import React, { FC } from 'react';

const Logo: FC = () => {
    return (
        <div className="logo">
            <span className="logo__mark">🍅</span>
            <span className="logo__title">Pizzeria</span>
            <div className="logo__flag" />
            <span className="logo__subtitle">Sapori italiani, passione vera</span>
        </div>
    )
}

export default Logo;