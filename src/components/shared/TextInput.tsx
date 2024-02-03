import React from 'react';
import Text from './Text';
import '../../styles/textInput.css';
import { TextInputProps } from '../../types/types';
const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  required = false,
  value,
  placeholder,
  isURL,
  addOnAfter,
  onChange,
}) => {
  return (
    <div className="input-container">
      <Text
        text={`${required ? label + ' *' : label}`}
        type="p"
        color="#344054"
        size="14px"
        // bold
      />
      {isURL ? (
        <div style={{ display: 'flex', width: '100%' }}>
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
          />
          <span className="input-addonAfter">{addOnAfter}</span>
        </div>
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          // onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      )}
    </div>
  );
};

export default TextInput;
