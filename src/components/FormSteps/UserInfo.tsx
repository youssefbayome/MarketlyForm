import React from 'react';
import { Form, Input } from 'antd';
import Text from '../shared/Text';
import Button from '../shared/Button';
import LangIcon from '../../images/langIcon.png';

import Select from '../shared/Select';
import { countries } from '../../lib/data';
import { UserInfoProps } from '../../types/types';

const UserInfo: React.FC<UserInfoProps> = ({
  userData,
  onChange,
  current,
  setCurrent,
}) => {
  const handleNext = () => {
    if (userData.email === '') return;
    setCurrent(current + 1);
  };

  const handleFieldChange = (
    fieldName: keyof UserInfoProps['userData'],
    value: string | number
  ) => {
    onChange({ ...userData, [fieldName]: value });
  };

  return (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Enter your name' }]}>
        <Input
          onChange={(e) => handleFieldChange('userName', e.target.value)}
          value={userData.userName}
        />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Enter your email' }]}>
        <Input
          onChange={(e) => handleFieldChange('email', e.target.value)}
          value={userData.email}
        />
      </Form.Item>
      <Form.Item label="Phone Number" name="phoneNo">
        <Select
          withText
          withIcon
          data={countries}
          // onChange={(value: any) => handleFieldChange('phoneNo', value)}
          // value={userData.phoneNo as number}
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Password must be 8 characters' }]}>
        <Input.Password
          onChange={(e) => handleFieldChange('password', e.target.value)}
          value={userData.password}
        />
     
      </Form.Item>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          marginBottom: 24,
        }}>
        <Text text="Already have an account?" size="13px" type="p" />
        <Button type="link">
          <Text type="span" text="Login" />
        </Button>
      </div>
      <Button type="primary" onClick={handleNext}>
        <Text type="span" text="Get started" />
      </Button>
      <Button type="link" isArabic width={'100%'}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
          }}>
          <img src={LangIcon} alt="change language" />
          <Text type="span" text="عربي" color="#667085" />
        </div>
      </Button>
    </>
  );
};

export default UserInfo;
