
import React from 'react';
import { Tabs } from 'antd';

const MyTab = () => {
    const items = [
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
            {items.map((item) => {
                return (
                    <Tabs.TabPane  tab={item.tab} key={item.key} >
                        <div id={item.href}>Salam {item.tab}</div>
                    </Tabs.TabPane>
                )

            })}
        </Tabs>

    )
}

export default MyTab;
