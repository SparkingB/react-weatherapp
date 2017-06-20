const { ActionTypes } = window.App;


const authToken = 'CWB-352E09AB-03DA-4E13-BB17-83A9CE672D46';
const getConfig = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        Authorization: authToken,
    },
};

window.App.WeatherActions = {
    loadWeather(select = '新北市') {
        return (dispatch) => {

            console.log("loadWeather");

            dispatch({
                type: ActionTypes.TOGGLE_LOADING_PAGE
            })

            console.log(select);

            const requestUrl = '/@/F-D0047-091?locationName=' + select + '&elementName=MinT,MaxT,T,PoP,Wx&sort=time';

            fetch(requestUrl, getConfig)
                .then((response) => {
                    console.log("fetch1");
                    return response.json();
                })
                .then((response) => {
                    console.log("fetch2");
                    dispatch({
                        type: ActionTypes.LOAD_WEATHER_SUCCESS,
                        response: response
                    });
                })
                .then(() => {
                    console.log("fetch3");
                    dispatch({
                        type: ActionTypes.TOGGLE_LOADING_PAGE
                    })
                });
        };
    },

    toggleLoadingPage() {
        return {
            type: ActionTypes.TOGGLE_LOADING_PAGE
        };
    }
};
