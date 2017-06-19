const {
    WeatherSelect
} = window.App;

class WeatherHeader extends React.Component {
    render() {

        const { title, onSelect } = this.props;

        return (
            <div className="header">
                <div className="header-title">{title}</div>
                <WeatherSelect
                    title={title}
                    onSelect={onSelect}
                />
            </div>
        )
    }
}

WeatherHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
}


window.App.WeatherHeader = WeatherHeader;