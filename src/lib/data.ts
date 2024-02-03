import EG from '../images/egy.png';
import USA from '../images/usa.png';
import Stars from '../images/Stars.png';
import Mail from '../images/mail.png';
import Bag from '../images/bag.png';
import { IndustryItem, SeleectItem } from '../types/types';
export const countries: SeleectItem[] = [
  { name: 'Egypt', code: '+20', image: EG },
  { name: 'USA', code: '+1', image: USA },
];
export const Industry: IndustryItem[] = [
  { name: 'Mens Fashion' },
  { name: 'Fashion' },
];

export const Images = [{ image: Stars }, { image: Mail }, { image: Bag }];
export const heading = [
  { heading: 'Start turning your ideas into reality.' },
  { heading: 'Verify your account now' },
  { heading: 'Setup your store the way you like' },
];
