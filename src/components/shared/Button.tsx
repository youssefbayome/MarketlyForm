import React from 'react';

interface ButtonProps {
  type: 'primary' | 'link';
  isArabic?: boolean;
  width?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  isArabic = false,
  onClick,
  children,
  width,
  ...props
}) => {
  const buttonStyles: React.CSSProperties = {
    padding: type === 'primary' ? '8px 16px' : 0,
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    fontWeight: 500,

    fontFamily: isArabic ? 'Cairo' : 'Inter',
  };

  if (type === 'primary') {
    buttonStyles.backgroundColor = '#7244C8';
    buttonStyles.color = '#fff';
    buttonStyles.width = '360px';
  } else if (type === 'link') {
    buttonStyles.backgroundColor = 'transparent';
    buttonStyles.color = '#6941C6';
    buttonStyles.textAlign = 'center';
    buttonStyles.width = width;
  }

  return (
    <button style={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
