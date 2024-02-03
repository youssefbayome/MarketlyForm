import React from 'react';
import { TypoProps } from '../../types/types';

const Text: React.FC<TypoProps> = ({ type, color, size, text, bold }) => {
  const Tag = type;

  const style: React.CSSProperties = {
    color,
    fontSize: size,
    lineHeight: type === 'h3' ? '72px' : 'normal',
    fontWeight: bold ? 'bold' : '',
  };

  return <Tag style={style}>{text}</Tag>;
};

export default Text;
