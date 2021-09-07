import React, { useState } from 'react';

const LoadingHOC = (Component) => {
    return function ComponentHOC(props) {
        const [isLoading, setIsLoading] = useState(false);
        
        const setLoadingState = (loadingState) => {
            setIsLoading(loadingState);
        }

        return isLoading ? (
            <div>Loading...</div>
        ) : (
            <Component {...props} setLoading={setLoadingState} />
        )
    }
}

export default LoadingHOC;