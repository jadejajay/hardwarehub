import { AboutUs } from '../about-us';
import { AdPlans } from '../ad-plans';
import { ArView } from '../ar-view';
import { Contact } from '../contact';
import { GstView } from '../gst-view';
import { OurServices } from '../our-services';
import { TermsConditions } from '../terms-conditions';
import { MainScreenView } from './main';

export const tabs = [
  { id: 1, text: 'Home', icon: 'home', comp: MainScreenView },
  { id: 2, text: 'About Us', icon: 'info', comp: AboutUs },
  { id: 5, text: 'Gst Info', icon: 'monetization-on', comp: GstView },
  {
    id: 6,
    text: 'Our Services',
    icon: 'emoji-transportation',
    comp: OurServices,
  },
  { id: 7, text: 'Ar View', icon: 'cases', comp: ArView },
  { id: 8, text: 'Ad Plans', icon: 'note-add', comp: AdPlans },
  {
    id: 3,
    text: 'Contact Us',
    icon: 'phone',
    comp: Contact,
  },
  { id: 4, text: 'Terms', icon: 'assignment', comp: TermsConditions },
];
export const logOutTab = { id: 5, text: 'LogOut', icon: 'logout' };
