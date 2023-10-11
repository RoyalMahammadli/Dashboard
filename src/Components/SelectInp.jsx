import { Select, Space } from 'antd';

function SelectInp() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
      
  return (
    <div>
        
  <Space  wrap>
    <Select
      defaultValue="People"
      style={{
        width: 120,
        color:'blue',
        marginLeft:'.5rem'
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'People',
          label: 'People',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
  </Space>

    </div>
  )
}

export default SelectInp





