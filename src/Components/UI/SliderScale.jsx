import React, { useState } from 'react';
import { Slider, Switch } from 'antd';

function SliderScale() {
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
        setDisabled(checked);
    };
    return (
        <>
            <Slider max={100}  min={0}   defaultValue={9} disabled={disabled} />
          
            Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
        </>
    );
}

export default SliderScale








