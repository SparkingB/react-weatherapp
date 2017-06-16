const {
    WeatherTitle,
    WeatherItem
} = window.App;

class WeatherSideHeader extends React.Component {
    render() {


        const { title, onSelect, weather } = this.props;


        return (
            <div className="side-header">
                <WeatherTitle
                    title={title}
                    onSelect={onSelect}
                />
                <WeatherItem
                    className="header-item"
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