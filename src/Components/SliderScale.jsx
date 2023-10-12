import React, { useState } from 'react';
import { Slider, Switch } from 'antd';

function SliderScale({employeVacsinationRate}) {
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };
    return (
        <>
            <Slider max={100}  min={0}   defaultValue={employeVacsinationRate} disabled={disabled} />
          
            Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
        </>
    );
}

export default SliderScale








