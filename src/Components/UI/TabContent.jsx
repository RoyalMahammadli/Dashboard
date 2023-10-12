import React from 'react'
import './TabContent.css'

import { QuestionCircleOutlined, SmileOutlined, AndroidOutlined, ApiOutlined, DribbbleOutlined } from '@ant-design/icons';
import SelectInp from '../SelectInp';
import CircleProgres from '../CircleProgres';
import ProgresScale from '../ProgresScale';
import SliderScale from '../SliderScale';
import ProgresScale1 from '../ProgresScale1';
function TabContent({ countryStateGuid, havenGuidelines, office, circleProgresValue, occupancyTarget, infectionRate, satisfactionRate, employeVacsinationRate, maskCompliance, recommOccupancy, recommOccupancyPercent, sharedDesk, privateOffice, maxCapacity, weeks, officeOccupancyPercent, officeOccupancy, employeesVaccinated }) {

    return (
        <div className='mainTab flex'>

            {/* lEFT SIDE      */}
            <div className="left">
                <h2>Forecast & recommendations</h2>
                <h4>Currently recommended occupancy:</h4>
                <ProgresScale recommOccupancy={recommOccupancy} recommOccupancyPercent={recommOccupancyPercent} />
                <div className="ocuppancy-targets">
                    <div className='flex' style={{ alignItems: 'center' }}>
                        <h4>Occupancy targets:</h4>
                        <div className='flex'>
                            <form action="">
                                <input type="tel" name="" id="numb" value={occupancyTarget} />
                            </form>
                            <SelectInp />
                        </div>

                    </div>
                    <CircleProgres weeks={weeks} circleProgresValue={circleProgresValue} />
                </div>
                <div className="vaccination-and-mask">
                    <h4>Maximum recommended ocuppancy for vaccination rate and mask compliance rate:</h4>
                    <div className="employes-vaccinated flex">
                        <h3>Employees vaccinated:</h3>
                        <p>38% ({employeesVaccinated}people)</p>
                    </div>
                    <SliderScale employeVacsinationRate={employeVacsinationRate} />
                    <p style={{ fontSize: '.7rem', color: ' rgb(14, 148, 236) ' }}>Current vaccination rate:10% ({employeVacsinationRate} people)</p>
                    <div className="employes-vaccinated flex">
                        <h3>Employees vaccinated:</h3>
                        <p>38% ({employeVacsinationRate}people)</p>
                    </div>
                    <SliderScale />

                </div>
                <div className='numb-Details' style={{ marginTop: '1rem' }}>
                    <p>Current recommended occupancy would be<span> 47% ({maxCapacity} people)</span> if your vaccination rate was  &nbsp; <span>{sharedDesk}</span> and your mask compliance rate was <span>{privateOffice}%</span></p>
                </div>


            </div>

            {/* RIGHT SIDE */}
            <div className="right">
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: '1rem' }}>
                    <h2>{office}</h2>
                    <div className='V-details'><p>Viev details</p></div>
                </div>
                <div className='numb-Details'>
                    <p><span>{sharedDesk}</span> shared desks + <span>{privateOffice}</span> private offices</p>
                    <p> Maximum capacity: <span>{maxCapacity} people</span> </p>
                </div>
                <div className="occupancy">
                    <h4>Current office occupancy:</h4>
                    <ProgresScale1 officeOccupancy={officeOccupancy} officeOccupancyPercent={officeOccupancyPercent} />
                </div>
                <div className="increas_occupancy">
                    <h4>Criteria for increasing occupancy:</h4>

                    <div className="guide1">
                        <p>Haven Guidelines  &nbsp; <QuestionCircleOutlined role='button' style={{ color: "gray", cursor: "pointer" }} /></p>
                        <div className={!havenGuidelines ? 'not-met' : 'met'}>
                            <p>{!havenGuidelines ? 'Not Met' : 'Met'}</p>
                        </div>
                    </div>

                    <div className="guide2">
                        <p>Country/State guidelines &nbsp;<QuestionCircleOutlined role='button' style={{ color: "gray", cursor: "pointer" }} /></p>
                        <div className={!countryStateGuid ? 'not-met' : 'met'}>
                            <p>{!countryStateGuid ? 'Not Met' : 'Met'}</p>
                        </div>
                    </div>

                </div>
                <div className="rates">
                    <div className="infection">
                        <div className="box"><AndroidOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Estimated office infection rate:</h5>
                            <p style={{ color: 'green', fontWeight: '700' }}>{infectionRate}%(low)</p>
                        </div>
                    </div>
                    <div className="satisfaction">
                        <div className="box"><SmileOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Employee satisfaction rate:</h5>
                            <p style={{ color: 'green', fontWeight: '700' }}>{satisfactionRate}%(high)</p>
                        </div>
                    </div>
                    <div className="vaccination">
                        <div className="box"><ApiOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Employee vaccination rate:</h5>
                            <p style={{ color: ' rgb(14, 148, 236)', fontWeight: '700' }}>{employeVacsinationRate}%</p>
                        </div>
                    </div>
                    <div className="compliance">
                        <div className="box"><DribbbleOutlined className='icon' /></div>
                        <div className="text">
                            <h5>Mask compliance:</h5>
                            <p style={{ color: ' rgb(14, 148, 236)', fontWeight: '700' }}>{!maskCompliance ? 'No' : 'Yes'}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default TabContent