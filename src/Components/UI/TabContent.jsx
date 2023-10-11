import React from 'react'
import './TabContent.css'
import ProgresScale from './ProgresScale'
import { QuestionCircleOutlined, SmileOutlined, AndroidOutlined, ApiOutlined, DribbbleOutlined } from '@ant-design/icons';
function TabContent() {
    return (
        <div className='mainTab'>
            <div className="left"></div>
            <div className="right">
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: '1rem' }}>
                    <h2>Dallas office</h2>
                    <div className='V-details'><p>Viev details</p></div>
                </div>
                <div className='numb-Details'>
                    <p>40 shared desks + 39 private offices</p>
                    <p> Maximum capacity:96 people</p>
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
                        <div className="box"><AndroidOutlined style={{ fontSize: '1.4rem', color: 'blue' }} /></div>
                        <div className="text">
                            <h5>Estimated office infection rate:</h5>
                            <p>0.3%(low)</p>
                        </div>
                    </div>
                    <div className="satisfaction">
                        <div className="box"><SmileOutlined style={{ fontSize: '1.4rem', color: 'blue' }} /></div>
                        <div className="text">
                        <h5>Employee satisfaction rate:</h5>
                            <p>65%(high)</p>
                        </div>
                    </div>
                    <div className="vaccination">
                        <div className="box"><ApiOutlined style={{ fontSize: '1.4rem', color: 'blue' }} /></div>
                        <div className="text">
                        <h5>Employee vaccination rate:</h5>
                            <p>10%</p>
                        </div>
                    </div>
                    <div className="compliance">
                        <div className="box"><DribbbleOutlined style={{ fontSize: '1.4rem', color: 'blue' }} /></div>
                        <div className="text">
                        <h5>Mask compliance:</h5>
                            <p>No</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TabContent