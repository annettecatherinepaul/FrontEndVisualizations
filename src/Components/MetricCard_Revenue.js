import React, {Component} from 'react'
import MetricCard from "react-metric-card";
import 'C:/Users/annet/WebstormProjects/Annette_Codes/my-awesome-vis-app/node_modules/react-metric-card/dist/index.css'

export default class MC_Revenue extends Component {
    render() {
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'inherit'
                }}>
                <div style={{width: 300}}>
                    <MetricCard
                        value={'426K'}
                        valueColor={'darkblue'}
                        valueFontSize = '30px'
                        trend={{
                            slope: 1, /* -1 for negative*/
                            value: '213K'
                        }}
                        title='Total Searches'
                        titleFontFamily='inherit'
                        titleFontSize = '15px'
                        titleColor = {'black'}
                        fetching={false}
                        error={null}
                        iconBgColor = {'darkblue'}
                    />
                </div>
            </div>

        )
    }
}