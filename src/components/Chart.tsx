import React from 'react';
import * as d3 from 'd3';

interface Props {

}

interface State {

}

class Chart extends React.Component<Props, State> {
	data = [0];
	total : number = 0;

	constructor(props: any) {
		super(props);

		this.data = [4, 3, 1, 2, 6, 2];
		this.total = this.data.reduce((total, elem) => total + elem);

		this.state = {}
	}

	componentDidMount() {
		this.drawChart();
	}

	drawChart() {
		const w = 600;
		const h = 300;

		const domain = ["1's", "2's", "3's", "4's", "5's", "6's"];
		let xScale = d3
			.scaleBand()
			.domain(domain)
			.rangeRound([0, w])
			.paddingInner(0.05);

		let yScale = d3
			.scaleLinear()
			.domain([0, 6])
			.range([0, h]);

		const svg = d3
			.select("#chart")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

		svg
			.selectAll("rect")
 			.data(this.data)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * 100)
			.attr("y", d => h - yScale(d))
			.attr("width", xScale.bandwidth())
			.attr("height", (d) => yScale(d))
			.attr("fill", "teal");

		svg
			.selectAll('text')
			.data(this.data)
			.enter()
			.append('text')
			.text(d => d)
			.attr('x', (d, i) => i * 100 + xScale.bandwidth() / 2)
			.attr('y', d => h - yScale(d) + 14)
			.attr('font-family', 'sans-serif')
			.attr('font-size', '11px')
			.attr('fill', 'white')
			.attr('text-anchor', 'middle');
	}

	render() {
		return (
			<div id="chart" />
		);
	}
}

export default Chart;
