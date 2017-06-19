const {
    WeatherPolyline,
    WeatherList
} = window.App;

class WeatherDataView extends React.Component {

    render() {
        const { weathers } = this.props;
        return weathers.length !== 0 ? this.renderData() : this.renderLoading();
    }

    renderData() {
        const { weathers } = this.props;
        return (
            <div>
                <img src="../assets/loading.png" alt="loading" className="loading"/>
                <WeatherPolyline
                    weathers={weathers}
                />
                <WeatherList
                    weathers={weathers}
                />
            </div>
        );

    }

    renderLoading() {
        return (
            <div>Loading</div>
        );
    }
}

WeatherDataView.propTypes = {
    weathers: React.PropTypes.arrayOf(React.PropTypes.object.isRequired)
}

window.App.WeatherDataView = WeatherDataView;