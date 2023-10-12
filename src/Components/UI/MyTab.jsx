
import React, { useContext } from 'react';
import { Tabs } from 'antd';
import TabContent from './TabContent';
import Context from '../../Context/Context';

const MyTab = () => {
    const { content, activeTabData, setActiveTabData } = useContext(Context)
    const changeTab = (argumentId) => {
        const findElement = content.find(item => item.id == argumentId)
        setActiveTabData(findElement)
    }

    return (
        <Tabs  >
            {content.map((item) => {
                return (
                    <Tabs.TabPane active={activeTabData} onClick={() => changeTab(item.id)} tab={item.office} key={item.id} >
                        <TabContent {...item} />
                    </Tabs.TabPane>
                )

            })}
        </Tabs>

    )
}

export default MyTab;
