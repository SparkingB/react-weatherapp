

class WeatherItem extends React.Component {

    render() {
        const { weather } = this.props;
        return weather ? this.renderObject() : this.renderNone();
    }

    renderNone() {
        return (<div></div>);
    }

    renderObject() {
        const { weather } = this.props;
        return (
            <div>
                <span>{weather.wDate} </span>
                <span>{weather.Wx} </span>
                <span>{weather.T} </span>
                <span>{weather.PoP} </span>
                <span>{weather.MinT} </span>
                <span>{weather.MaxT} </span>
            </div>
        )
    }
}

WeatherItem.propTypes = {
    weather: React.PropTypes.object
}

window.App.WeatherItem = WeatherItem;