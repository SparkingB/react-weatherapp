const {
    WeatherTitle,
    WeatherItem,
    SVGcircle
} = window.App;

class WeatherSideHeader extends React.Component {
    render() {


        const { title, onSelect, weathers } = this.props;

        const position = [{ x: 50 }, { x: 100 }, { x: 150 }, { x: 200 }, { x: 250 }, { x: 300 }, { x: 350 }];

        const temperature = weathers.map((w, idx) => { position[idx].t = Number(w.T); position[idx].date = w.wDate; return position[idx].t });
        const temperatureMin = Math.min(...temperature);
        const temperatureDis = Math.max(...temperature) - temperatureMin;
        const mulFix = 130.0 / temperatureDis;
        position.map((pos) => (pos.cy = (pos.t - temperatureMin) * mulFix + 35));

        const polylinePoint = position.reduce((first, second) => (first+' '+second.x+','+ -second.cy),'')


        const circle = position.map(
            (pos) => (
                <SVGcircle
                    key={pos.x}
                    textX={pos.x - 10}
                    textY={pos.cy + 10}
                    circleX={pos.x}
                    circleY={pos.cy}
                    date={pos.date}
                    temperature={pos.t}
                />
            )
        );

        return (
            <div className="side-header">
                <WeatherTitle
                    title={title}
                    onSelect={onSelect}
                />

                <svg viewBox="0 -200 400 200" >
                    {circle}
                    <polyline points={polylinePoint}></polyline>
                </svg>
            </div>
        )
    }
}

WeatherSideHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    weather: React.PropTypes.arrayOf(React.PropTypes.object.isRequired)
}


window.App.WeatherSideHeader = WeatherSideHeader;