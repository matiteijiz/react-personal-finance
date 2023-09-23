import React from 'react'

const HomeScreen = () => {
    const currentMonth = capitalizeFirstLowercaseRest(getCurrentMonth());

    return (
        <div>Welcome *name*! This are your income/outcomes of { currentMonth }</div>
    )
}

const capitalizeFirstLowercaseRest = wordToLowercase => {
    return (
        wordToLowercase.charAt(0).toUpperCase() + wordToLowercase.slice(1).toLowerCase()
    );
};

const getCurrentMonth = () => {
    return (
        new Date().toLocaleString([], {
            month: 'long'
        })
    );
};

export default HomeScreen;