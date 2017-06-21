const {
    WeatherPolyline,
    WeatherList,
    Loading,
    Error
} = window.App;

class WeatherDataView extends React.Component {

    render() {
        const { weathers } = this.props;
        if (weathers === "error") return this.renderError();
        else return weathers.length !== 0 ? this.renderData() : this.renderLoading();
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

    renderError() {
        return (
            <Error />
        );
    }

}

WeatherDataView.propTypes = {
    weathers: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.object.isRequired), React.PropTypes.string.isRequired])
}

window.App.WeatherDataView = WeatherDataView;