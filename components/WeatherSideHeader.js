const {
    WeatherTitle,
    WeatherItem
} = window.App;

class WeatherSideHeader extends React.Component {
    render() {


        const { title, onSelect, weather } = this.props;


        return (
            <div>
                <WeatherTitle
                    title={title}
                    onSelect={onSelect}
                />
                <WeatherItem
                    weather={weather}
                />
            </div>
        )
    }
}

WeatherSideHeader.propTypes = {
    title: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    weather: React.PropTypes.object
}


window.App.WeatherSideHeader = WeatherSideHeader;