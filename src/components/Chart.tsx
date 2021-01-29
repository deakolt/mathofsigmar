import React from 'react';
import * as d3 from 'd3';

interface Props {

}

interface State {

}

class Chart extends React.Component<Props, State> {
	data : number[] = [];
	total : number = 0;

	constructor(props: any) {
		super(props);

		this.data = props.data || [4, 3, 1, 2, 6, 2];
		this.total = this.data.reduce((total, elem) => total + elem);

		this.state = {}
	}

	componentDidMount() {
		this.drawChart();
	}

	drawChart() {
		const w = 700;
		const h = 300;

		const svg = d3
			.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h)
			.style("margin-left", 100);

		svg
			.selectAll("rect")
 			.data(this.data)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * 70)
			.attr("y", (d, i) => h - 10 * d)
			.attr("width", 65)
			.attr("height", (d, i) => d * 10)
			.attr("fill", "green");
	}

	render() {
		return (
			<div id="chart" />
		);
	}
}

export default Chart;
