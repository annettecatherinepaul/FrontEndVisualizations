import React, { Component } from 'react';

import { Funnel } from 'funnel-react';

const data = [
    {
        "_id": "VisualSearchFunnel",
        "item": "Total Views",
        "label": "Total Views",
        "percent": 100,
        "quantity": 50150
    },
    {
        "_id": "VisualSearchFunnel",
        "item": "Added to Cart",
        "label": "Added to Cart",
        "percent": 69.8,
        "quantity": 40859
    },
    {
        "_id": "VisualSearchFunnel",
        "item": "Removed from Cart",
        "label": "Removed from Cart",
        "percent": 17.9,
        "quantity": 10824
    },
    {
        "_id": "VisualSearchFunnel",
        "item": "Purchased (Conversions)",
        "label": "Purchased (Conversions)",
        "percent": 12.3,
        "quantity": 7175
    }
]
export default class FunnelC extends Component {
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
                <div style={{width: 500}}>
                    <Funnel
                        labelKey='label'
                        height={250}
                        colors={{
                            graph: [ 'blue', '#BAE7FF' ],
                            percent: 'black',
                            label: 'black',
                            value: 'green'
                        }}
                        valueKey='quantity'
                        width={500}
                        responsive={true}
                        displayPercent={true}
                        data={data} />
                </div>
            </div>
        )
    }
}