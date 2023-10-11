import React from 'react'
import { Progress, Space } from 'antd';

function ProgresScale() {

    return (
        <>
            <Space direction="vertical"
            >
                <p style={{
                    fontSize: '2rem',
                    color: 'gray',
                    fontFamily: 'monospace',
                    fontWeight: 'bolder'
                }} >50% <span style={{
                    fontSize: '1rem'
                }}>48people</span></p>
                <Progress strokeColor={{from:'  rgb(14, 148, 236)',to:'  rgb(14, 148, 236)'}} percent={50} showInfo={false} size={[300, 13]}  />
            </Space>

        </>
    )
}

export default ProgresScale;
