export type SeleectItem = {
  name: string;
  code: string;
  image: string;
};
export type IndustryItem = {
  name: string;
};
export type FormData = {
  userName: string;
  email: string;
  password: string;
  phoneNo: number;
  storeName: string;
  storeUrl: string;
  storeIndustry: string;
  storeLang: string;
};

export type UserInfoProps = {
  userData: {
    userName: string;
    email: string;
    password: string;
    phoneNo: number;
  };
  onChange: (values: Partial<UserInfoProps['userData']>) => void;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

export type SelectProps = {
  handleChange?: (value: string) => void;
  value?: string;
  withText?: boolean;
  withIcon?: boolean;
  data: {
    name: string;
    code?: string;
    image?: string;
  }[];
};

export type TypoProps = {
  type: 'h3' | 'p' | 'span';
  color?: string;
  size?: string;
  text: string;
  bold?: boolean;
};

export type TextInputProps = {
  label: string;
  type: 'text' | 'password' | 'email' | 'number';
  required?: boolean;
  value?: string;
  placeholder?: string;
  isURL?: boolean;
  addOnAfter?: string;
  onChange?: (value: any) => void;
}
