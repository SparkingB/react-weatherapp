const {
    WeatherSideHeader,
    WeatherList
} = window.App;

let ADD = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?locationName=臺北市&elementName=MinT,MaxT,T,PoP,Wx&sort=time';
let AAA = {
    method: 'GET',
    headers: new Headers({
        'Authorization': 'CWB-352E09AB-03DA-4E13-BB17-83A9CE672D46',
        'Access-Control-Allow-Origin':''
  }),
    mode: 'no-cors'
};

class WeatherApp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            weathers: [],
            searchText: "新北市"
        };
    }

    componentWillMount() {
        fetch(ADD,AAA)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((responseObj) => {//移位置
                console.log(responseObj);
                const weatherElementObjAry = responseObj.records.locations[0].location[0].weatherElement;

                const weathers = [{}, {}, {}, {}, {}, {}, {}];
                weatherElementObjAry.map(
                    (weatherElementObj) => {
                        let weatherElementDay = weatherElementObj.time.filter((weatherElement, idx) => (idx === 0 || weatherElement.endTime.indexOf('18:00') !== -1)).splice(0, 7);
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
                                    weathers[idx].wDate = wed.startTime.slice(5, 10);
                                })
                                break;
                            default:
                                break;
                        }

                    })

                const T = weatherElementObjAry.filter((weathersElement) => (weathersElement.elementName === 'T'))[0];
                weathers[0].T = T.time[0].elementValue;

                const PoP = weatherElementObjAry.filter((weathersElement) => (weathersElement.elementName === 'PoP'))[0];
                weathers[0].PoP = PoP.time[0].elementValue

                this.setState({ weathers: weathers })
            });
    }

    render() {

        return (
            <div>
                <WeatherSideHeader
                    title={this.state.searchText}
                    onSelect={(select) => this.setState({ searchText: select })}
                    weather={this.state.weathers[0]}
                />
                <WeatherList
                    weathers={this.state.weathers.slice(1)}
                />
            </div>
        )
    }
}

window.App.WeatherApp = WeatherApp;
