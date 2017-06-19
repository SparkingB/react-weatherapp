

class SVGcircle extends React.Component {

    render() {
        const { textX, textY, circleX, circleY, temperature, date } = this.props;
        return (
            <g>
                <text x={textX} y={-textY} >{temperature}°C</text>
                <circle cx={circleX} cy={-circleY} r="3"></circle>
                <text x={textX - 5} y="-10" className="svgDate">{date}</text>
            </g>
        );
    }

}

SVGcircle.propTypes = {
    textX: React.PropTypes.number.isRequired,
    textY: React.PropTypes.number.isRequired,
    circleX: React.PropTypes.number.isRequired,
    circleY: React.PropTypes.number.isRequired,
    temperature: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired
}

window.App.SVGcircle = SVGcircle;