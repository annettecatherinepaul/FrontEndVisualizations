import React, {Component} from "react";
import {Hint, RadialChart} from "react-vis";

export default class City extends Component {
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
                    {theta: 30, label:'Beijing'},
                    {theta: 40, label: 'Hong Kong'},
                    {theta: 10, label: 'Mumbai'},
                    {theta: 5, label: 'Paris'},
                    {theta: 15, label: 'Singapore'}
                ]}
                onValueMouseOver={v => this.setState({value: v})}
                onSeriesMouseOut={() => this.setState({value: false})}
                width={500}
                height={500}
                padAngle={0.04}
                showLabels={true}
                colorType={}
            >
                {value !== false && <Hint value={value} />}
            </RadialChart>
        );
    }
}