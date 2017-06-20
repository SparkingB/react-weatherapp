const {
    WeatherHeader,
    WeatherDataView
} = window.App;


const authToken = 'CWB-352E09AB-03DA-4E13-BB17-83A9CE672D46';
const getConfig = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        Authorization: authToken,
    },
};


class WeatherApp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            weathers: [],
            loadingClassName: "hidden",
            test: []
        };

        this.dealFetchResponse = this.dealFetchResponse.bind(this);
        this.fetchRequest = this.fetchRequest.bind(this);
    }


    componentWillMount() {
        this.fetchRequest();
    }


    fetchRequest(select = '新北市') {
        console.log(select);
        const requestUrl = '/@/F-D0047-091?locationName=' + select + '&elementName=MinT,MaxT,T,PoP,Wx&sort=time';
        fetch(requestUrl, getConfig)
            .then((response) => {
                return response.json();
            })
            .then((response)=>(setTimeout(() => this.dealFetchResponse(response),500)));
            // .then(this.dealFetchResponse);
            
            
    }


    dealFetchResponse(responseObj) {
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

        this.setState({ weathers: weathers, loadingClassName: "hidden", test: weatherElementObjAry })
    }


    render() {

        return (
            <div className="container">
                <WeatherHeader
                    onSelect={
                        (select) => {
                            this.setState({ loadingClassName: "visible" })
                            this.fetchRequest(select);
                        }
                    }
                />
                <WeatherDataView
                    weathers={this.state.weathers}
                    loadingClassName={this.state.loadingClassName}
                />
            </div>
        )
    }
}

window.App.WeatherApp = WeatherApp;
