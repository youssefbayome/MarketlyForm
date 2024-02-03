import React, { useState } from 'react';
import OTPInputs from '../shared/OTPInputs';
import Button from '../shared/Button';
import Text from '../shared/Text';
import MailCheck from '../../images/mailCheck.png';
import Success from '../../images/success.png';
import LeftArrow from '../../images/leftArrow.png';
type UserInfoProps = {
  userData: {
    email: string;
  };
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

const OTPForm: React.FC<UserInfoProps> = ({
  userData,
  current,
  setCurrent,
}) => {
  const [otp, setOTP] = useState([0, 0, 0, 0]);
  const [verified, setVerified] = useState(false);

  const handleVerifyEmail = () => {
    const expectedOTP = [1, 2, 3, 4];
    if (JSON.stringify(otp) === JSON.stringify(expectedOTP)) {
      setVerified(true);
    } else {
      // assume that user has entered the otp correct :)
      setVerified(true);
      setOTP([0, 0, 0, 0]);
    }
  };
  const handleNext = () => {
    if (userData.email === '') return;
    setCurrent(current + 1);
  };
  const handleBack = () => {
    setCurrent(0);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      {!verified ? (
        <>
          <img src={MailCheck} alt="confirm" />
          <div style={{ textAlign: 'center' }}>
            <Text text="Check your email" type="h3" size="30px" />
            <Text
              text="We sent a verification code to"
              type="p"
              size="16px"
              color="#475467"
            />
            <Text text={userData.email} type="p" size="16px" color="#475467" />
          </div>
          <OTPInputs length={4} />
          <Button type="primary" onClick={handleVerifyEmail}>
            Verify email
          </Button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              marginBottom: 24,
            }}>
            <Text text="Didn’t receive the email?" size="13px" type="p" />
            <Button type="link">
              <Text type="span" text="Click to resend" />
            </Button>
          </div>
          <Button type="link" width={'100%'} onClick={handleBack}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 8,
              }}>
              <img src={LeftArrow} alt="change language" />
              <Text type="span" text="back to login" color="#667085" />
            </div>
          </Button>
        </>
      ) : (
        <>
          <img src={Success} alt="confirm" />
          <div style={{ textAlign: 'center' }}>
            <Text text="Email verified" type="h3" size="30px" />
            <Text
              text="Your accounnt has been verified successfully. Click below to setup your store."
              type="p"
              size="16px"
              color="#475467"
            />
          </div>
          <Button type="primary" onClick={handleNext}>
            Continue
          </Button>
          <Button type="link" width={'100%'} onClick={handleBack}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 8,
              }}>
              <img src={LeftArrow} alt="change language" />
              <Text type="span" text="back to login" color="#667085" />
            </div>
          </Button>
        </>
      )}
    </div>
  );
};

export default OTPForm;
