const {
    WeatherHeader,
    WeatherDataView,
    WeatherActions
} = window.App;

const { connect } = ReactRedux;

class WeatherApp extends React.Component {

    componentWillMount() {
        console.log('componentWillMount');
        this.props.loadWeather();
    }

    render() {

        const {
            weathers,
            loadingClassName,
            loadWeather
         } = this.props;

        console.log('before WeatherApp render',weathers);
        return (
            <div className="container">
                <WeatherHeader
                    onSelect={loadWeather}
                />
                <WeatherDataView
                    weathers={weathers}
                    loadingClassName={loadingClassName}
                />
            </div>
        )
    }
}


window.App.WeatherApp = connect(
    (state) => ({ weathers: state.weathers.weathers, loadingClassName: state.loading}),
    {
        loadWeather: WeatherActions.loadWeather,
    }
)(WeatherApp);
