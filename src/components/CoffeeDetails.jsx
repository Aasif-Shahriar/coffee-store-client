import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    return (
        <div>
            details
        </div>
    );
};

export default CoffeeDetails;