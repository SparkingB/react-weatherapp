

class WeatherItem extends React.Component {

    render() {
        const { weather } = this.props;
        return weather ? this.renderObject() : this.renderNone();
    }

    renderNone() {
        return (<div></div>);
    }

    renderObject() {
        const { weather, className } = this.props;
        const imgUrl = 'http://www.cwb.gov.tw/V7/symbol/weather/gif/day/'+weather.Wx+'.gif';
        return (
            <div className={className}>
                <span className="date">{weather.wDate} </span>
                <img className="weather-pic" src={imgUrl} alt="pic" />
                <span className="temperature">{weather.T} </span>
                <span className="pop">{weather.PoP} </span>
                <span className="min-temperature">{weather.MinT} </span>
                <span className="max-temperature">{weather.MaxT} </span>
            </div>
        )
    }
}

WeatherItem.propTypes = {
    weather: React.PropTypes.object,
    className: React.PropTypes.string
}

window.App.WeatherItem = WeatherItem;