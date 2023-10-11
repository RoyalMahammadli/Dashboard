
import React from 'react';
import { Tabs } from 'antd';
import TabContent from './TabContent';

const MyTab = () => {
    const Tabitems = [
        {
            key: '1',
            tab: 'Dallas Office',
            href: '#dallas'
        },
        {
            key: '2',
            tab: 'Coppel Office',
            href: '#coppel'
        },
        {
            key: '3',
            tab: 'Loss Angeles Office',
            href: '#angeles'
        },
    ];
    return (
        <Tabs >
            {Tabitems.map((item) => {
                return (
                    <Tabs.TabPane tab={item.tab} key={item.key} >
                        <TabContent  />
                    </Tabs.TabPane>
                )

            })}
        </Tabs>

    )
}

export default MyTab;
