import { useState } from 'react';
import { Form, Steps } from 'antd';
import UserInfo from './FormSteps/UserInfo';
import OTPConfirm from './FormSteps/OTPConfirm';
import FormInfo from './FormInfo';
import StoreInfo from './FormSteps/StoreInfo';
import { FormData } from '../types/types';
import Logo from '../images/logo.png';
import Text from './shared/Text';
export default function RegisterForm() {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [userData, setUserData] = useState<FormData>({
    userName: '',
    email: '',
    password: '',
    phoneNo: 0,
    storeName: '',
    storeUrl: '',
    storeIndustry: '',
    storeLang: '',
  });

  // const onFinish = () => {
  //   //any for now
  //   console.log('Received values of form: ');
  // };
  const handleChange = (values: Partial<FormData>) => {
    setUserData({ ...userData, ...values });
  };
  const steps = [
    {
      title: 'Your Details',
      content: (
        <UserInfo
          userData={userData}
          onChange={handleChange}
          current={current}
          setCurrent={setCurrent}
        />
      ),
      description: 'Provide your basic information',
    },
    {
      title: 'Confirmation',
      content: (
        <OTPConfirm
          userData={userData}
          current={current}
          setCurrent={setCurrent}
        />
      ),
      description: 'Confirm your email',
    },
    {
      title: 'Store information',
      content: <StoreInfo setCurrent={setCurrent} />,
      description: 'Set your store main info',
    },
  ];

  const items = steps.map((item, index) => ({
    key: item.title,
    title: item.title,
    description: item.description,
    finished: index < current,
  }));
  const CustomDot = ({ finished }: { finished: boolean }) => (
    <div className={`custom-dot ${finished ? 'finished' : ''}`}>
      <div className="inner-circle" />
    </div>
  );
  return (
    <div className="container">
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        className="form-conateiner">
        <header className="form-header">
          <img src={Logo} alt="logo" />
        </header>
        <Steps
          progressDot={(props) => <CustomDot {...props} />}
          current={current}
          items={items}
          labelPlacement="vertical"
          style={{ width: '80%', alignSelf: 'center' }}
        />

        <div style={{ width: '360px', height: '100%' }}>
          {steps[current].content}
        </div>
        <div className="arrow" />
        <footer className="form-footer">
          <Text text="© Markatty 2022" type="p" />
          <p>
            <a
              href="mailto:support@markatty.com"
              style={{ fontSize: 14, color: '#475467' }}>
              support@markatty.com
            </a>
          </p>
        </footer>
      </Form>
      <FormInfo stepNumber={current} />
    </div>
  );
}
