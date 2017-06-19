const {
    WeatherPolyline,
    WeatherList,
    Loading
} = window.App;

class WeatherDataView extends React.Component {

    render() {
        const { weathers } = this.props;
        return weathers.length !== 0 ? this.renderData() : this.renderLoading();
    }

    renderData() {
        const { weathers, loadingClassName } = this.props;
        return (
            <div>
                <Loading 
                    loadingClassName={loadingClassName}
                />
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
            <Loading />
        );
    }
}

WeatherDataView.propTypes = {
    weathers: React.PropTypes.arrayOf(React.PropTypes.object.isRequired)
}

window.App.WeatherDataView = WeatherDataView;