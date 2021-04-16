import React, {Component} from "react";
import {Hint, RadialChart} from "react-vis";

export default class Device extends Component {
    state = {
        value: false
    };
    render() {
        const {value} = this.state;
        return (
            <RadialChart
                className={'Device'}
                innerRadius={100}
                radius={140}
                getAngle={d => d.theta}
                data={[
                    {theta: 70, label:'Mobile'},
                    {theta: 7, label: 'Tablet'},
                    {theta: 23, label: 'Desktop'}
                ]}
                onValueMouseOver={v => this.setState({value: v})}
                onSeriesMouseOut={() => this.setState({value: false})}
                width={500}
                height={500}
                padAngle={0.04}
                showLabels={true}
            >
                {value !== false && <Hint value={value} />}
            </RadialChart>
        );
    }
}