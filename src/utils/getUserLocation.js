export const getUserLocation = (options ={}) => {
    return new Promise((resolve, reject) => {
        if(!navigator.geolocation) {
            reject(new Error('Geolocation is not supported on your device'))
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                resolve(position.coords)
            }, 
            (err) => {
                reject(err)
            }, options)
        }
    })
};


export const watchUserLocation = (options = {}) => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported on your device'));
        } else {
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    resolve(position.coords);
                },
                (error) => {
                    reject(new Error(`Error in retrieving location: ${error.message}`));
                },
                options
            );
        }
    });
};
