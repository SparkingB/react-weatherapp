const {
    WeatherItem
} = window.App;

class WeatherList extends React.Component {
    render() {
        const { weathers } = this.props;

        const WeatherItems = weathers.map(
            (weather) => (
                <WeatherItem
                    className="list-item"
                    key={weather.wDate}
                    weather={weather}
                />
            )
        );



        return (<div className="list">{WeatherItems}</div>)
    }
}

WeatherItem.propTypes = {
    weathers: React.PropTypes.arrayOf(React.PropTypes.object)
}

window.App.WeatherList = WeatherList;