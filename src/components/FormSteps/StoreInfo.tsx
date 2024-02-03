import React from 'react';
import TextInput from '../shared/TextInput';
import Select from '../shared/Select';
import { Industry, countries } from '../../lib/data';
import Text from '../shared/Text';
import Button from '../shared/Button';
import LeftArrow from '../../images/leftArrow.png';

type StoreInfoProps = {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};
const StoreInfo: React.FC<StoreInfoProps> = ({ setCurrent }) => {
  const handleBack = () => {
    setCurrent(0);
  };
  return (
    <div className="store-info">
      <TextInput
        label="Store Name"
        type="text"
        required
        placeholder="Type your store name"
      />
      <TextInput
        label="Store URL"
        type="text"
        required
        isURL
        placeholder="my store"
        addOnAfter=".marketly.com"
      />
      <Select data={countries} withIcon />
      <Select data={Industry} />
      <Text
        text={`Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)`}
        type="p"
        color="#475467"
      />
      <Button type="primary">
        <Text text="Save" type="p" />
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
    </div>
  );
};
export default StoreInfo;
