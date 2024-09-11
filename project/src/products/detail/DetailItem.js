import React from 'react';

const DetailItem = ({ label, value }) => {
    return (
        <div>
            <strong>{label}</strong>: {value}
        </div>
    );
};

export default DetailItem;