import React from 'react';
import { Select as NSelect, Input } from 'antd';

import { SelectProps } from '../../types/types';

const { Option } = NSelect;
const Select: React.FC<SelectProps> = ({
  handleChange,
  value,
  withText,
  data,
  withIcon = false,
}) => {
  const [selectedCountry, setSelectedCountry] = React.useState(data[0]);

  const handleCountryChange = (value: string) => {
    const country = data.find((country) => country.code === value);
    if (country) setSelectedCountry(country);
  };

  return (
    <>
      {withText ? (
        <>
          <NSelect
            defaultValue={data[0].code}
            style={{ width: 100 }}
            onChange={handleCountryChange}>
            {data.map((country, index) => (
              <Option key={index} value={country.code}>
                <div>
                  <img
                    src={country.image}
                    alt={country.name}
                    style={{ width: '20px', marginRight: '8px' }}
                  />
                  {country.name}
                </div>
              </Option>
            ))}
          </NSelect>
          <Input
            // onChange={handleChange}
            value={value}
            type="number"
            placeholder={` (${selectedCountry.code} )16724688`}
            style={{ width: 'calc(100% - 110px)', marginLeft: 8 }}
          />
        </>
      ) : (
        <NSelect
          defaultValue={data[0].name}
          style={{ width: '100%' }}
          onChange={handleCountryChange}>
          {data.map((country, index) => (
            <Option key={index} value={country.code}>
              <div>
                {withIcon ? (
                  <img
                    src={country.image}
                    alt={country.name}
                    style={{ width: '20px', marginRight: '8px' }}
                  />
                ) : null}
                {country.name}
              </div>
            </Option>
          ))}
        </NSelect>
      )}
    </>
  );
};

export default Select;
