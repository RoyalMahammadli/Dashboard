import { Progress, Space } from 'antd'
import React from 'react'

function ProgresScale1({officeOccupancy,officeOccupancyPercent}) {
  return (
    <>
            <Space direction="vertical"
            >
                <p style={{
                    fontSize: '2rem',
                    color: 'gray',
                    fontFamily: 'monospace',
                    fontWeight: 'bolder'
                }} >{officeOccupancyPercent}% <span style={{
                    fontSize: '1rem'
                }}>{officeOccupancy}people</span></p>
                <Progress strokeColor={{ from: '  rgb(14, 148, 236)', to: '  rgb(14, 148, 236)' }} percent={officeOccupancyPercent} showInfo={false} size={[300, 13]} />
            </Space>

        </>
  )
}

export default ProgresScale1