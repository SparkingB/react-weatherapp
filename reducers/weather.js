const { ActionTypes } = window.App;


const _initState = () => ({
    weathers: [],
    test: []
})

const _errorState = () => ({
    weathers: "error"
})

const _dealFetchResponse = (responseObj) => {
    const weatherElementObjAry = responseObj.records.locations[0].location[0].weatherElement;

    const weathers = [{}, {}, {}, {}, {}, {}, {}];
    weatherElementObjAry.map(
        (weatherElementObj) => {
            let weatherElementDay = weatherElementObj.time.filter((weatherElement, idx) => (idx === 0 && weatherElement.startTime.indexOf('00:00') === -1 || weatherElement.endTime.indexOf('18:00') !== -1)).splice(0, 7);
            switch (weatherElementObj.elementName) {
                case 'Wx':
                    weatherElementDay.map((wed, idx) => {
                        weathers[idx].Wx = wed.parameter[0].parameterValue;
                    })
                    break;
                case 'MinT':
                    weatherElementDay.map((wed, idx) => {
                        weathers[idx].MinT = wed.elementValue;
                    })
                    break;
                case 'MaxT':
                    weatherElementDay.map((wed, idx) => {
                        weathers[idx].MaxT = wed.elementValue;
                        weathers[idx].wDate = wed.startTime.slice(5, 10).replace('-', '/');
                    })
                    break;
                case 'T':
                    weatherElementDay.map((wed, idx) => {
                        weathers[idx].T = wed.elementValue;
                    })
                    break;
                case 'PoP':
                    weatherElementDay.map((wed, idx) => {
                        weathers[idx].PoP = wed.elementValue;
                    })
                    break;
                default:
                    break;
            }

        })

    return { weathers: weathers , test: weatherElementObjAry };
}

window.App.reducers.weathers = (state = _initState(), action) => {
    switch (action.type) {
        case ActionTypes.LOAD_WEATHER_SUCCESS:
            console.log("LOAD_WEATHER_SUCCESS");
            return _dealFetchResponse(action.json);
        case ActionTypes.LOAD_WEATHER_FAIL:
            console.log("LOAD_WEATHER_FAIL");
            return _errorState();
        default:
            return state;
    }
};