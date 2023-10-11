import React from 'react'
import { Progress, Space } from 'antd';

function ProgresScale() {

    return (
        <>
            <Space direction="vertical">
                <p style={{
                    fontSize: '2rem',
                    color: 'gray',
                    fontFamily: 'monospace',
                    fontWeight: 'bolder'
                }} >50% <span style={{
                    fontSize: '1rem'
                }}>48people</span></p>
                <Progress percent={50} size={[300, 20]} />
            </Space>

        </>
    )
}

export default ProgresScale;
