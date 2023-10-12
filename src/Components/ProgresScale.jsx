import React from 'react'
import { Progress, Space } from 'antd';

function ProgresScale({ recommOccupancy, recommOccupancyPercent}) {

    return (
        <>
            <Space direction="vertical"
            >
                <p style={{
                    fontSize: '2rem',
                    color: 'gray',
                    fontFamily: 'monospace',
                    fontWeight: 'bolder'
                }} >{recommOccupancyPercent}% <span style={{
                    fontSize: '1rem'
                }}>{recommOccupancy}people</span></p>
                <Progress strokeColor={{ from: '  rgb(14, 148, 236)', to: '  rgb(14, 148, 236)' }} percent={recommOccupancyPercent} showInfo={false} size={[605, 13]} />
            </Space>

        </>
    )
}

export default ProgresScale;
