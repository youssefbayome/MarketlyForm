import React from 'react';
import Text from './shared/Text';
import { Images, heading } from '../lib/data';
type FormInfoProps = {
  stepNumber: number;
};

export default function FormInfo({ stepNumber }: FormInfoProps) {
  return (
    <div className="form-info">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          width: '80%',
          gap: 30,
        }}>
        <img
          src={`${Images[stepNumber].image}`}
          alt={`${heading[stepNumber].heading}`}
          style={{ width: 80, height: 80 }}
        />
        <Text
          type="h3"
          text={heading[stepNumber].heading}
          color="#FFF"
          size="60px"
        />
        <Text
          type="p"
          text="Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes."
          color="#EAECF0"
          size="18px"
        />
      </div>
    </div>
  );
}
