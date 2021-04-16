import React from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend, ChartLabel
} from 'react-vis';

export default class Example extends React.Component {
    state = {
        useCanvas: false
    };
    render() {
        const {useCanvas} = this.state;
        const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

        return (
            <div>
                <XYPlot
                    className="clustered-stacked-bar-chart-example"
                    xType="ordinal"
                    stackBy="y"
                    width={400}
                    height={400}
                >
                    <DiscreteColorLegend
                        style={{position: 'absolute', left: '50px', top: '10px'}}
                        orientation="horizontal"
                        items={[
                            {
                                title: 'Q1',
                                color: '#12939A'
                            },
                            {
                                title: 'Q2',
                                color: '#79C7E3'
                            }
                        ]}
                    />
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <BarSeries
                        cluster="G1"
                        color="#12939A"
                        data={[
                            {x: 'Run', y: 10},
                            {x: 'Trail', y: 15},
                            {x: 'Walk', y: 16},
                            {x: 'Trail-Run', y: 18},
                            {x: 'Formal', y: 10}
                        ]}
                    />
                    <BarSeries
                        cluster="G2"
                        color="#79C7E3"
                        data={[
                            {x: 'Run', y: 5},
                            {x: 'Trail', y: 8},
                            {x: 'Walk', y: 15},
                            {x: 'Trail-Run', y: 15},
                            {x: 'Formal', y: 9}
                        ]}
                    />
                    <ChartLabel
                        text = 'Top 5 Categories Comparison'
                        includeMargin={false}
                    />
                </XYPlot>
            </div>
        );
    }
}