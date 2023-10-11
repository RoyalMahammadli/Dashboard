import React from 'react'
import './TabContent.css'
import ProgresScale from '../ProgresScale'
import { QuestionCircleOutlined, SmileOutlined, AndroidOutlined, ApiOutlined, DribbbleOutlined } from '@ant-design/icons';
import SelectInp from '../SelectInp';
function TabContent() {
    return (
        <div className='mainTab flex'>

            {/* lEFT SIDE      */}
            <div className="left">
                <h2>Forecast & recommendations</h2>
                <h4>Currently recommended occupancy:</h4>
                <ProgresScale />
                <div className="ocuppancy-targets">
                    <div className='flex' style={{alignItems:'center'}}>
                        <h4>Occupancy targets:</h4>
                        <div className='flex'>
                            <input type="number" name="" id="numb" />
                            <SelectInp />
                        </div>

                    </div>
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="right">
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: '1rem' }}>
                    <h2>Dallas office</h2>
                    <div className='V-details'><p>Viev details</p></div>
                </div>
                <div className='numb-Details'>
                    <p><span>40</span> shared desks + <span>39</span> private offices</p>
                    <p> Maximum capacity: <span>96 people</span> </p>
                </div>
                <div className="occupancy">
                    <h4>Current office occupancy:</h4>
                    <ProgresScale />
                </div>
                <div className="increas_occupancy">
                    <h4>Criteria for increasing occupancy:</h4>

                    <div className="guide1">
                        <p>Haven Guidelines  &nbsp; <QuestionCircleOutlined role='button' style={{ color: "gray", cursor: "pointer" }} /></p>
                        <div className="not-met">
                            <p>Not met</p>
                        </div>
                    </div>

                    <div className="guide2">
                        <p>Country/State guidelines &nbsp;<QuestionCircleOutlined role='button' style={{ color: "gray", cursor: "pointer" }} /></p>
                        <div className="met">
                            <p>Met</p>
                        </div>
                    </div>

                </div>
                <div className="rates">
                    <div className="infection">
                        <div className="box"><AndroidOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Estimated office infection rate:</h5>
                            <p style={{ color: 'green', fontWeight: '700' }}>0.3%(low)</p>
                        </div>
                    </div>
                    <div className="satisfaction">
                        <div className="box"><SmileOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Employee satisfaction rate:</h5>
                            <p style={{ color: 'green', fontWeight: '700' }}>65%(high)</p>
                        </div>
                    </div>
                    <div className="vaccination">
                        <div className="box"><ApiOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Employee vaccination rate:</h5>
                            <p style={{ color: ' rgb(14, 148, 236)', fontWeight: '700' }}>10%</p>
                        </div>
                    </div>
                    <div className="compliance">
                        <div className="box"><DribbbleOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Mask compliance:</h5>
                            <p style={{ color: ' rgb(14, 148, 236)', fontWeight: '700' }}>No</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TabContent