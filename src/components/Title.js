import React from 'react';

function Title({ title = 'ללא כותרת' }) {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

export default Title;