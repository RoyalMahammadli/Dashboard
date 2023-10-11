import { Progress, Space } from 'antd';

function CircleProgres() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'relative',
            marginTop:'2rem'
        }}>
            <Space wrap>
                <div style={{
                    position: 'absolute',
                    top:'-20px',
                    left:'90px'
                }}>Salam</div>
                <Progress type="circle" percent={75} format={(percent) => `${percent} Days`} />
            </Space>
            <Space wrap>
                <div style={{ position: 'absolute' }}>Salam</div>
                <Progress type="circle" percent={100} format={() => 'Done'} />
            </Space>
            <Space wrap>
                <div style={{ position: 'absolute' }}>Salam</div>
                <Progress type="circle" percent={100} format={() => 'Done'} />
            </Space>
        </div>
    )
}

export default CircleProgres;

